'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { prefectures } from "@/models/prefectureCode";
import { Guest, GuestSchema } from "@/components/GuestForm/guest.schema";
import { Input } from "@nextui-org/input";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { Button, cn, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";

function GuestForm() {
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
        // TODO フォームデータの処理
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Input
                label={"姓"}
                type="text"
                isInvalid={!!errors.lastName}
                color={errors.lastName ? "danger" : "success"}
                errorMessage={errors.lastName?.message ?? ""}
                {...register('lastName')}

            />

            <Input
                label={"名"}
                type="text"
                isInvalid={!!errors.firstName}
                color={errors.firstName ? "danger" : "success"}
                errorMessage={errors.firstName?.message ?? ""}
                {...register('firstName')}
            />

            <Input
                label={"姓（ふりがな）"}
                type="text"
                isInvalid={!!errors.lastNameKana}
                color={errors.lastNameKana ? "danger" : "success"}
                errorMessage={errors.lastNameKana?.message ?? ""}
                {...register('lastNameKana')}
            />

            <Input
                label={"名（ふりがな）"}
                type="text"
                isInvalid={!!errors.firstNameKana}
                color={errors.firstNameKana ? "danger" : "success"}
                errorMessage={errors.firstNameKana?.message ?? ""}
                {...register('firstNameKana')}
            />

            <div>
                <RadioGroup
                    label="新郎・新婦側"
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

            <Input
                label={"郵便番号"}
                type="text"
                isInvalid={!!errors.postalCode}
                color={errors.postalCode ? "danger" : "success"}
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
                                    <Button variant="bordered" className="text-amber-500">
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
                                        list: 'max-h-60 overflow-y-auto', // ここで最大高さとスクロールを設定
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
                color={errors.city ? "danger" : "success"}
                errorMessage={errors.city?.message ?? ""}
                {...register('city')}
            />


            <Input
                label={"住所詳細"}
                type="text"
                isInvalid={!!errors.addressLine}
                color={errors.addressLine ? "danger" : "success"}
                errorMessage={errors.addressLine?.message ?? ""}
                {...register('addressLine')}
            />


            <div>
                <RadioGroup
                    label="出欠確認"
                    color="warning"
                    onValueChange={(value: string) => {
                        console.log('value', value);
                        setValue('attendanceStatus', value as 'ATTENDING' | 'NOT_ATTENDING' | 'PENDING');
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
                        <Radio
                            value="PENDING"
                            classNames={{
                                base: cn(
                                    'inline-flex m-0 bg-content1 hover:bg-content2 items-center justify-between',
                                    'flex-row-reverse max-w-[300px] cursor-pointer rounded-lg gap-4 p-4 border-2 border-transparent',
                                    'data-[selected=true]:border-primary'
                                ),
                            }}
                        >
                            未定
                        </Radio>
                    </div>
                </RadioGroup>
                {errors.attendanceStatus && (
                    <p style={{color: 'red'}}>{errors.attendanceStatus.message}</p>
                )}
            </div>

            <button type="submit">送信</button>
        </form>
    );
}

export default GuestForm;