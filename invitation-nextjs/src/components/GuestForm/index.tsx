'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { prefectures } from "@/models/prefectureCode";
import { Guest, GuestSchema } from "@/components/GuestForm/guest.schema";
import { Input } from "@nextui-org/input";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { Button, Checkbox, cn, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { Link } from "@nextui-org/link";
import { siteConfig } from "@/config/site";
import { button as buttonStyles } from "@nextui-org/theme";
import { useRouter } from "next/navigation";

const GuestForm: React.FC = () => {
    const router = useRouter();
    const {
        control,
        register,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm<Guest>({
        resolver: zodResolver(GuestSchema),
    });

    const onSubmit = async (data: Guest) => {
        console.log('guest', data);

        try {
            const response = await fetch('/api/guest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('成功:', result);
                router.push(siteConfig.navigation.thanks.path);

            } else {
                const errorData = await response.json();
                console.error('エラー:', errorData);
                // エラー表示などの処理を行う
            }
        } catch (error) {
            console.error('通信エラー:', error);
            // 通信エラーの表示などの処理を行う
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="my-1.5">
                <RadioGroup
                    label="ご出席"
                    color="warning"
                    onValueChange={(value: string) => {
                        console.log('value', value);
                        setValue('attendanceStatus', value as 'ATTENDING' | 'NOT_ATTENDING');
                    }}
                >
                    <div className="flex flex-row gap-4 justify-center">
                        <Radio
                            value="ATTENDING"
                            classNames={{
                                base: cn(
                                    'inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between',
                                    'flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent',
                                    'data-[selected=true]:border-primary'
                                ),
                            }}
                        >
                            出席
                        </Radio>
                        <Radio
                            value="NOT_ATTENDING"
                            classNames={{
                                base: cn(
                                    'inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between',
                                    'flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent',
                                    'data-[selected=true]:border-primary'
                                ),
                            }}
                        >
                            欠席
                        </Radio>
                    </div>
                </RadioGroup>
                {errors.attendanceStatus && (
                    <p style={{color: 'red'}}>{errors.attendanceStatus.message}</p>
                )}
            </div>

            <label>お名前</label>
            <div className="flex row my-1.5">
                <Input
                    label={"姓"}
                    type="text"
                    isInvalid={!!errors.lastName}
                    color={errors.lastName ? "danger" : "default"}
                    errorMessage={errors.lastName?.message ?? ""}
                    {...register('lastName')}

                />

                <Input
                    label={"名"}
                    type="text"
                    isInvalid={!!errors.firstName}
                    color={errors.firstName ? "danger" : "default"}
                    errorMessage={errors.firstName?.message ?? ""}
                    {...register('firstName')}
                />
            </div>
            <div className="flex row my-1.5">
                <Input
                    label={"姓（ふりがな）"}
                    type="text"
                    isInvalid={!!errors.lastNameKana}
                    color={errors.lastNameKana ? "danger" : "default"}
                    errorMessage={errors.lastNameKana?.message ?? ""}
                    {...register('lastNameKana')}
                />

                <Input
                    label={"名（ふりがな）"}
                    type="text"
                    isInvalid={!!errors.firstNameKana}
                    color={errors.firstNameKana ? "danger" : "default"}
                    errorMessage={errors.firstNameKana?.message ?? ""}
                    {...register('firstNameKana')}
                />
            </div>

            <div className="my-1.5 pt-">
                <RadioGroup
                    label="いずれかをお選びください"
                    color="warning"
                    onValueChange={(value: string) => {
                        console.log('value', value);
                        setValue('side', value as "GROOM" | "BRIDE");
                    }}
                >
                    <div className="flex flex-row gap-4 justify-center">
                        <Radio value="GROOM" classNames={{
                            base: cn(
                                "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
                                "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
                                "data-[selected=true]:border-primary"
                            ),
                        }}>
                            新郎側
                        </Radio>
                        <Radio value="BRIDE" classNames={{
                            base: cn(
                                "inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between",
                                "flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent",
                                "data-[selected=true]:border-primary"
                            ),
                        }}>
                            新婦側
                        </Radio>

                    </div>
                </RadioGroup>
                {errors.side && <p style={{color: 'red'}}>{errors.side.message}</p>}

            </div>
            <div className="my-1.5">
                <label>ご住所</label>
                <Input
                    label={"郵便番号"}
                    type="text"
                    isInvalid={!!errors.postalCode}
                    color={errors.postalCode ? "danger" : "default"}
                    errorMessage={errors.postalCode?.message ?? ""}
                    {...register('postalCode')}
                />
                <div>
                    <label>都道府県:</label>
                    <Controller
                        control={control}
                        name="prefectureCode"
                        render={({field}) => {
                            const selectedPrefecture = prefectures.find((pref) => pref.code === field.value);
                            return (
                                <Dropdown>
                                    <DropdownTrigger>
                                        <Button variant="bordered" className="text-gray-600">
                                            {selectedPrefecture ? selectedPrefecture.name : '都道府県を選択'}
                                        </Button>
                                    </DropdownTrigger>
                                    <DropdownMenu
                                        aria-label="都道府県選択"
                                        disallowEmptySelection
                                        selectionMode="single"
                                        selectedKeys={field.value ? [field.value.toString()] : []}
                                        onSelectionChange={(keys) => {
                                            const value = Array.from(keys)[0];
                                            field.onChange(Number(value));
                                        }}
                                        classNames={{
                                            list: 'max-h-60 overflow-y-auto text-gray-600',
                                        }}
                                    >
                                        {prefectures.map((pref) => (
                                            <DropdownItem key={pref.code.toString()}>{pref.name}</DropdownItem>
                                        ))}
                                    </DropdownMenu>
                                </Dropdown>
                            );
                        }}
                    />
                    {errors.prefectureCode && (
                        <p style={{color: 'red'}}>{errors.prefectureCode.message}</p>
                    )}
                </div>


                <Input
                    label={"市区町村"}
                    type="text"
                    isInvalid={!!errors.city}
                    color={errors.city ? "danger" : "default"}
                    errorMessage={errors.city?.message ?? ""}
                    {...register('city')}
                />


                <Input
                    label={"住所詳細"}
                    type="text"
                    isInvalid={!!errors.addressLine}
                    color={errors.addressLine ? "danger" : "default"}
                    errorMessage={errors.addressLine?.message ?? ""}
                    {...register('addressLine')}
                />

            </div>
            <div className="my-1.5 flex flex-col px-10 justify-center">
                <label>アレルギー確認にご協力ください</label>
                <Link
                    isExternal
                    className={buttonStyles({variant: "bordered", radius: "full", color: "primary"})}
                    href={siteConfig.links.survey}
                >
                    回答はこちらから
                </Link>
                <Checkbox
                    className="text-amber-500"
                    isInvalid={!!errors.isCheck}
                    color={errors.isCheck ? "danger" : "default"}
                    onValueChange={(value: boolean) => {
                        setValue('isCheck', value);
                    }}
                >回答済みの場合はチェックしてください</Checkbox>
                {errors.isCheck && <p style={{color: 'red'}}>{errors.isCheck.message}</p>}
            </div>
            <br/>
            <button type="submit">送信</button>

        </form>
    );
}

export default GuestForm;