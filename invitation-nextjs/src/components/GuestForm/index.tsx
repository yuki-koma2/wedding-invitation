'use client';

import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { prefectures } from "@/models/prefectureCode";
import { Guest, GuestSchema } from "@/components/GuestForm/guest.schema";
import { Input } from "@nextui-org/input";
import { Radio, RadioGroup } from "@nextui-org/radio";
import {
    Button,
    cn,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Listbox,
    ListboxItem
} from "@nextui-org/react";

function GuestForm() {
    const {
        control,
        register,
        handleSubmit,
        setValue,
        formState: {errors},
    } = useForm<Guest>({
        resolver: zodResolver(GuestSchema),
        defaultValues: {
            attendanceStatus: 'PENDING',
        },
    });

    const onSubmit = async (data: Guest) => {
        console.log('guest', data);
        // フォームデータの処理（例：サーバーに送信）
        // try {
        //     const response = await fetch('/api/guest', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify(data),
        //     });
        //
        //     if (response.ok) {
        //         // 成功時の処理
        //         console.log('送信に成功しました');
        //     } else {
        //         // エラー時の処理
        //         console.error('送信に失敗しました');
        //     }
        // } catch (error) {
        //     console.error('エラーが発生しました', error);
        // }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                {/*<label>姓:</label>*/}
                <Input
                    label={"姓"}
                    type="text"
                    isInvalid={!!errors.lastName}
                    color={errors.lastName ? "danger" : "success"}
                    errorMessage={errors.lastName?.message ?? ""}
                    {...register('lastName')}

                />
                {/*{errors.lastName && <p style={{color: 'red'}}>{errors.lastName.message}</p>}*/}
            </div>

            <div>
                {/*<label>名:</label>*/}
                {/* <Input*/}
                {/*     type="text" {...register('firstName')}*/}
                {/* />*/}
                {/*{errors.firstName && <p style={{color: 'red'}}>{errors.firstName.message}</p>}*/}
                <Input
                    label={"名"}
                    type="text"
                    isInvalid={!!errors.firstName}
                    color={errors.firstName ? "danger" : "success"}
                    errorMessage={errors.firstName?.message ?? ""}
                    {...register('firstName')}
                />
            </div>

            <div>
                {/*<label>姓（ふりがな）:</label>*/}
                {/* <Input type="text" {...register('lastNameKana')} />*/}
                {/*{errors.lastNameKana && (*/}
                {/*    <p style={{color: 'red'}}>{errors.lastNameKana.message}</p>*/}
                {/*)}*/}

                <Input
                    label={"姓（ふりがな）"}
                    type="text"
                    isInvalid={!!errors.lastNameKana}
                    color={errors.lastNameKana ? "danger" : "success"}
                    errorMessage={errors.lastNameKana?.message ?? ""}
                    {...register('lastNameKana')}
                />
            </div>

            <div>
                {/*<label>名（ふりがな）:</label>*/}
                {/* <Input type="text" {...register('firstNameKana')} />*/}
                {/*{errors.firstNameKana && (*/}
                {/*    <p style={{color: 'red'}}>{errors.firstNameKana.message}</p>*/}
                {/*)}*/}
                <Input
                    label={"名（ふりがな）"}
                    type="text"
                    isInvalid={!!errors.firstNameKana}
                    color={errors.firstNameKana ? "danger" : "success"}
                    errorMessage={errors.firstNameKana?.message ?? ""}
                    {...register('firstNameKana')}
                />
            </div>

            <div>
                {/*<label>新郎・新婦側:</label>*/}
                {/*<select {...register('side')}>*/}
                {/*    <option value="GROOM">新郎側</option>*/}
                {/*    <option value="BRIDE">新婦側</option>*/}
                {/*</select>*/}


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

            <div>
                <Input
                    label={"郵便番号"}
                    type="text"
                    isInvalid={!!errors.postalCode}
                    color={errors.postalCode ? "danger" : "success"}
                    errorMessage={errors.postalCode?.message ?? ""}
                    {...register('postalCode')}
                />
            </div>
            <div>
                {/*<label>都道府県:</label>*/}
                {/*<select {...register('prefectureCode', {valueAsNumber: true})}>*/}
                {/*    <option value="">選択してください</option>*/}
                {/*    {prefectures.map((pref) => (*/}
                {/*        <option key={pref.code} value={pref.code}>*/}
                {/*            {pref.name}*/}
                {/*        </option>*/}
                {/*    ))}*/}
                {/*</select>*/}
                {/*{errors.prefectureCode && (*/}
                {/*    <p style={{color: 'red'}}>{errors.prefectureCode.message}</p>*/}
                {/*)}*/}

                {/*<Listbox*/}
                {/*    aria-label="Single selection example"*/}
                {/*    variant="flat"*/}
                {/*    disallowEmptySelection*/}
                {/*    selectionMode="single"*/}
                {/*    selectedKeys={selectedKeys}*/}
                {/*    onSelectionChange={setSelectedKeys}*/}
                {/*>*/}
                {/*    <ListboxItem key="text">Text</ListboxItem>*/}
                {/*    <ListboxItem key="number">Number</ListboxItem>*/}
                {/*    <ListboxItem key="date">Date</ListboxItem>*/}
                {/*    <ListboxItem key="single_date">Single Date</ListboxItem>*/}
                {/*    <ListboxItem key="iteration">Iteration</ListboxItem>*/}
                {/*</Listbox>*/}
                {/*<p className="text-small text-default-500">Selected value: {selectedValue}</p>*/}
                {/*<label>都道府県:</label>*/}
                {/*<Controller*/}
                {/*    control={control}*/}
                {/*    name="prefectureCode"*/}
                {/*    render={({ field }) => (*/}
                {/*        <Listbox*/}
                {/*            aria-label="都道府県選択"*/}
                {/*            variant="flat"*/}
                {/*            disallowEmptySelection*/}
                {/*            selectionMode="single"*/}
                {/*            selectedKeys={field.value ? [field.value.toString()] : []}*/}
                {/*            onSelectionChange={(keys) => {*/}
                {/*                const value = Array.from(keys)[0];*/}
                {/*                field.onChange(Number(value));*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            {prefectures.map((pref) => (*/}
                {/*                <ListboxItem key={pref.code.toString()} value={pref.code.toString()}>*/}
                {/*                    {pref.name}*/}
                {/*                </ListboxItem>*/}
                {/*            ))}*/}
                {/*        </Listbox>*/}
                {/*    )}*/}
                {/*/>*/}
                {/*{errors.prefectureCode && (*/}
                {/*    <p style={{ color: 'red' }}>{errors.prefectureCode.message}</p>*/}
                {/*)}*/}
                <label>都道府県:</label>
                <Controller
                    control={control}
                    name="prefectureCode"
                    render={({ field }) => {
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
                    <p style={{ color: 'red' }}>{errors.prefectureCode.message}</p>
                )}
            </div>


            <div>
                {/*<label>市区町村:</label>*/}
                {/* <Input type="text" {...register('city')} />*/}
                {/*{errors.city && <p style={{color: 'red'}}>{errors.city.message}</p>}*/}

                <Input
                    label={"市区町村"}
                    type="text"
                    isInvalid={!!errors.city}
                    color={errors.city ? "danger" : "success"}
                    errorMessage={errors.city?.message ?? ""}
                    {...register('city')}
                />
            </div>

            <div>
                {/*<label>住所詳細:</label>*/}
                {/* <Input type="text" {...register('addressLine')} />*/}
                {/*{errors.addressLine && (*/}
                {/*    <p style={{color: 'red'}}>{errors.addressLine.message}</p>*/}
                {/*)}*/}
                <Input
                    label={"住所詳細"}
                    type="text"
                    isInvalid={!!errors.addressLine}
                    color={errors.addressLine ? "danger" : "success"}
                    errorMessage={errors.addressLine?.message ?? ""}
                    {...register('addressLine')}
                />
            </div>

            <div>
                {/*<label>出欠確認:</label>*/}
                {/*<select {...register('attendanceStatus')}>*/}
                {/*    <option value="ATTENDING">出席</option>*/}
                {/*    <option value="NOT_ATTENDING">欠席</option>*/}
                {/*    <option value="PENDING">未定</option>*/}
                {/*</select>*/}
                {/*{errors.attendanceStatus && (*/}
                {/*    <p style={{color: 'red'}}>{errors.attendanceStatus.message}</p>*/}
                {/*)}*/}
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
                    <p style={{ color: 'red' }}>{errors.attendanceStatus.message}</p>
                )}
            </div>

            <button type="submit">送信</button>
        </form>
    );
}

// 都道府県コードから都道府県名を取得する関数
function getPrefectureName(code: number): string {
    const prefectureNames = [
        '北海道', '青森県', '岩手県', '宮城県', '秋田県',
        '山形県', '福島県', '茨城県', '栃木県', '群馬県',
        '埼玉県', '千葉県', '東京都', '神奈川県', '新潟県',
        '富山県', '石川県', '福井県', '山梨県', '長野県',
        '岐阜県', '静岡県', '愛知県', '三重県', '滋賀県',
        '京都府', '大阪府', '兵庫県', '奈良県', '和歌山県',
        '鳥取県', '島根県', '岡山県', '広島県', '山口県',
        '徳島県', '香川県', '愛媛県', '高知県', '福岡県',
        '佐賀県', '長崎県', '熊本県', '大分県', '宮崎県',
        '鹿児島県', '沖縄県',
    ];
    return prefectureNames[code - 1] || '';
}

export default GuestForm;