"use client";

import { WrapperProduct } from "@/components/shared/wrapper";
import { useCart } from "@/storage/cart";
import Image from "next/image";
import type { CartProduct } from "@/types/types";
const styleOrange = "bg-moderate-orange text-white hover:bg-soft-orange";
import { IconConfirm } from "@/components/shared/icons";
import { Dispatch, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";


import { useForm } from "react-hook-form";
import {z} from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function Modal({grandTotal, devices, confirm}: {grandTotal: number; devices: CartProduct[]; confirm: Dispatch<SetStateAction<boolean>>}) {
    const router = useRouter();
    const {removeCart} = useCart();

    const finishAll = () => {
        confirm(false);
        removeCart();
        router.push("/");
    }
    

    return (
        <>
            <div className="fixed inset-0 bg-black/40 z-0"></div>
            <section className="fixed z-10 bg-white rounded-lg top-1/2 left-1/2 -translate-1/2 w-[327px] md:w-[540px]  p-8 md:py-14 md:px-14 flex flex-col gap-4 md:gap-8">
                <IconConfirm />
                <h4 className="h4">THANK YOU FOR YOUR ORDER</h4>
                <p className="p text-black/50">You will receive an email confirmation shortly.</p>
                {/* INFORMATION CONFIRM */}
                <section className="md:flex ">
                    <section className="rounded-t-lg md:rounded-l-lg md:rounded-tr-none bg-very-light-gray py-5 px-6 md:grow">

                        {
                            devices.slice(0, 1).map((device, index) => {
                                return (
                                    <section key={index} className="flex items-start gap-4 border-b border-b-black/5 pb-4">
                                        <Image src={device.image} alt={device.name} width={40} height={40} className="rounded-lg object-contain" />
                                        <div>
                                            <p className="p text-black font-bold">{device.name}</p>
                                            <p className="text-black/50 font-bold leading-body text-[14px] ">$ {device.priceOriginal.toLocaleString("en-US")}</p>
                                        </div>
                                        <p className="p font-bold ml-auto text-black/50">x{device.count}</p>
                                    </section>
                                )
                            })
                        }
                        <section className="pt-4">
                            <p className="tracking-label font-bold text-sm text-black/50 text-center">and {devices.length - 1} other item(s)</p>
                        </section>
                    </section>
                    <div className="h-[92px] md:h-auto md:justify-center md:grow bg-black rounded-b-lg md:rounded-r-lg md:rounded-l-none py-4 px-6 flex flex-col gap-2">
                        <p className="p text-white/50">GRAND TOTAL</p>
                        <p className="price text-white">$ {grandTotal.toLocaleString("en-US")}</p>

                    </div>
                </section>
                
                    <button onClick={finishAll} className={`cursor-pointer transition-colors subtitle w-full h-[48px] ${styleOrange}`}>BACK TO HOME</button>
                
                
            </section>
        </>
    )
}


function Device({device}: {device: CartProduct}) {
    return (
        <section className="flex items-start gap-4">
            <Image src={device.image} alt={device.name} width={64} height={64} className="rounded-lg" />
            <div>
                <p className="p text-black font-bold">{device.name}</p>
                <p className="text-black/50 font-bold leading-body text-[14px] ">$ {device.priceOriginal.toLocaleString("en-US")}</p>
            </div>
            <p className="p font-bold ml-auto text-black/50">x{device.count}</p>
        </section>
    )
}

const FormCheckout = z.object({
    name: z.string().trim().min(3, "Required this field"),
    email: z.email("Invalid email"),
    phone: z.string().trim().transform((val) => val.startsWith("+") ? val.replaceAll(" ", "") : "+"+val.replaceAll(" ", "")),
    address: z.string().trim(),
    zip: z.string().regex(/^\d{5}$/, "Write five digits").transform((val) => Number(val)),
    city: z.string().trim().min(1, "Required this field"),
    country: z.string().trim(),
    payment: z.string("Choose payment method").trim(),
    eMoneyNumber: z.coerce.number(),
    eMoneyPin: z.string().regex(/^\d{4}$/, "Write four digits").transform((val) => Number(val))

})

type Data = z.infer<typeof FormCheckout>;

function TextError({text}: {text: string}) {
    return <p className="text-red-400 text-sm subtitle">{text}</p>
}


export default function Checkout() {
    const [confirm, setConfirm] = useState<boolean>(false);
    const router = useRouter();
    const {cart} = useCart();
    const devices = Object.values(cart) || [];
    const total = devices.reduce((acc, {price}) => acc + price ,0) || 0;
    const vat = Math.floor(total * 0.20);
    const shipping = 50;
    const grandTotal = total + vat + shipping;


    const confirmPay = () => {
        setConfirm(!confirm);
    }

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(FormCheckout)
    });
    const onSubmit = (data: Data) => {
        console.log(data);
        confirmPay();
    }
    return (
        <>
            {
                confirm &&
                <Modal confirm={setConfirm} devices={devices} grandTotal={grandTotal}  />
            }
        <WrapperProduct>
            <button className="p text-black/50 cursor-pointer mt-4" onClick={() => router.back()}>
                Go Back
            </button>
            {/* PAY */}
            <form onSubmit={handleSubmit(onSubmit)}  className="mt-4 mb-[100px] flex flex-col gap-10 ds:flex-row ds:items-start">
                <section className="rounded-lg bg-white p-8 max-w-[730px] ds:min-w-[730px]">
                    <h4 className="h4 text-black">CHECKOUT</h4>
                    <section className="mt-6 flex flex-col gap-10" >
                        {/* BILLING */}
                        <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                            <p className="subtitle md:col-start-1 md:col-end-3">BILLING DETAILS</p>
                            <fieldset>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Alexei Ward"
                                {...register("name")}
                                />

                                {errors.name && <TextError text={errors.name.message!} />}
                            </fieldset>
                            <fieldset>
                                <label htmlFor="email">Email Address</label>
                                <input type="email" id="email" placeholder="alexei@mail.com"
                                    {...register("email")}
                                />
                                {errors.email && <TextError text={errors.email.message!} />}
                            </fieldset>
                            <fieldset>
                                <label htmlFor="phone">Phone Number</label>
                                <input type="tel" id="phone" placeholder="+1 202-555-0136" 
                                    {...register("phone")}
                                />
                                {errors.phone && <TextError text={errors.phone.message!} />}
                            </fieldset>
                        </div>
                        {/* SHIPPING */}
                        <div className="flex flex-col gap-4 md:grid md:grid-cols-2">
                            <p className="subtitle md:col-span-2">SHIPPING INFO</p>
                            <fieldset className="md:col-span-2">
                                <label htmlFor="address">Your Address</label>
                                <input type="text" id="address" placeholder="1137 Williams Avenue" 
                                    {...register("address")}
                                />
                                {errors.address && <TextError text={errors.address.message!} />}
                            </fieldset>
                            <fieldset>
                                <label htmlFor="zip">ZIP Code</label>
                                <input type="number" id="zip" placeholder="10001" 
                                    {...register("zip")}
                                />
                                {errors.zip && <TextError text={errors.zip.message!} />}
                            </fieldset>
                            <fieldset>
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" placeholder="New York"
                                    {...register("city")}
                                />
                                {errors.city && <TextError text={errors.city.message!} />}
                            </fieldset>
                            <fieldset>
                                <label htmlFor="country">Country</label>
                                <input type="text" id="country" placeholder="United States" 
                                    {...register("country")}
                                />
                                {errors.country && <TextError text={errors.country.message!} />}
                            </fieldset>
                        
                        </div>
                        {/* PAYMENT */}
                        <div className="flex flex-col gap-4">
                            <p className="subtitle">PAYMENT DETAILS</p>
                            <fieldset className="md:flex md:justify-between">
                                <p className="text-[12px] leading-none tracking-label text-black font-bold mb-3">Payment Method</p>
                                <div className="md:min-w-[309px]">
                                    <label htmlFor="e-money" className="selected flex p-5 items-center gap-4 rounded-lg border-light-gray border">
                                        <input className="w-3 accent-moderate-orange shrink-0" type="radio" id="e-money" value="e-Money" 
                                            {...register("payment")}
                                        />
                                        <p>e-Money</p>
                                    </label>
                                    <label htmlFor="cash" className="selected flex p-5 items-center gap-4 rounded-lg border-light-gray border">
                                        <input className="w-3 accent-moderate-orange shrink-0" type="radio" id="cash" value="Cash on Delivery" 
                                            {...register("payment")}
                                        />
                                        <p>Cash on Delivery</p>
                                    </label>
                                    {errors.payment && <TextError text={errors.payment.message!} />}
                                </div>
                            </fieldset>
                            <div className="flex flex-col gap-4 ds:flex-row">
                                <fieldset className="ds:flex-1">
                                    <label htmlFor="e-money-number">e-Money Number</label>
                                    <input type="number" id="e-money-number" placeholder="1234738493"
                                        {...register("eMoneyNumber")}
                                    />
                                    {errors.eMoneyNumber && <TextError text={errors.eMoneyNumber.message!} />}
                                </fieldset>
                                <fieldset className="ds:flex-1">
                                    <label htmlFor="e-money-pin">e-Money PIN</label>
                                    <input type="number" id="e-money-pin" placeholder="6891" 
                                        {...register("eMoneyPin")}
                                    />
                                    {errors.eMoneyPin && <TextError text={errors.eMoneyPin.message!} />}
                                </fieldset>

                            </div>
                        </div>
                    </section>

                </section>
                {/* SUMMARY  */}
                <section className="rounded-lg bg-white p-8 flex flex-col gap-4 max-w-[350px] ds:grow">
                    <h3 className="price">SUMMARY</h3>
                    {/* devices */}
                    <section className="flex flex-col gap-4">
                        {
                            devices.map((device: CartProduct, index: number) => (
                                <Device key={index} device={device} />
                            ))
                        }
                    </section>
                    <section className="md:mt-4">
                        <div className="flex justify-between">
                            <p className="p text-black/50">TOTAL</p>
                            <p className="price">$ {total.toLocaleString("en-US")}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="p text-black/50">SHIPPING</p>
                            <p className="price">$ {shipping.toLocaleString("en-US")}</p>
                        </div>
                        <div className="flex justify-between">
                            <p className="p text-black/50">VAT (INCLUDED)</p>
                            <p className="price">$ {vat.toLocaleString("en-US")}</p>
                        </div>
                        <div className="flex justify-between mt-5">
                            <p className="p text-black/50">GRAND TOTAL</p>
                            <p className="price text-moderate-orange font-bold">$ {grandTotal.toLocaleString("en-US")}</p>
                        </div>
                        
                    </section>
                    <button disabled={devices.length === 0} type="submit" className={`disabled:bg-moderate-orange/20 cursor-pointer transition-colors subtitle w-full h-[48px] ${styleOrange}`}>CONTINUE & PAY</button>
                </section>
            </form>

        </WrapperProduct>
        </>
    )

}