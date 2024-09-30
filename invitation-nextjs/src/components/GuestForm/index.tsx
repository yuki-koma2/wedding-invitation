'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { prefectures } from "@/models/prefectureCode";
import { Guest, GuestSchema } from "@/components/GuestForm/guest.schema";

function GuestForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Guest>({
        resolver: zodResolver(GuestSchema),
        defaultValues: {
            attendanceStatus: 'PENDING',
        },
    });

    const onSubmit = async (data: Guest) => {
        console.log('guest',data);
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
                <label>姓:</label>
                <input type="text" {...register('lastName')} />
                {errors.lastName && <p style={{color: 'red'}}>{errors.lastName.message}</p>}
            </div>

            <div>
                <label>名:</label>
                <input type="text" {...register('firstName')} />
                {errors.firstName && <p style={{color: 'red'}}>{errors.firstName.message}</p>}
            </div>

            <div>
                <label>姓（ふりがな）:</label>
                <input type="text" {...register('lastNameKana')} />
                {errors.lastNameKana && (
                    <p style={{color: 'red'}}>{errors.lastNameKana.message}</p>
                )}
            </div>

            <div>
                <label>名（ふりがな）:</label>
                <input type="text" {...register('firstNameKana')} />
                {errors.firstNameKana && (
                    <p style={{color: 'red'}}>{errors.firstNameKana.message}</p>
                )}
            </div>

            <div>
                <label>新郎・新婦側:</label>
                <select {...register('side')}>
                    <option value="GROOM">新郎側</option>
                    <option value="BRIDE">新婦側</option>
                </select>
                {errors.side && <p style={{color: 'red'}}>{errors.side.message}</p>}
            </div>

            <div>
                <label>郵便番号:</label>
                <input type="text" {...register('postalCode')} />
                {errors.postalCode && (
                    <p style={{color: 'red'}}>{errors.postalCode.message}</p>
                )}
            </div>

            {/*<div>*/}
            {/*    <label>都道府県:</label>*/}
            {/*    <select {...register('prefectureCode')}>*/}
            {/*        <option value="">選択してください</option>*/}
            {/*        {Array.from({ length: 47 }, (_, i) => i + 1).map((code) => (*/}
            {/*            <option key={code} value={code}>*/}
            {/*                /!* 都道府県名を表示する *!/*/}
            {/*                {getPrefectureName(code)}*/}
            {/*            </option>*/}
            {/*        ))}*/}
            {/*    </select>*/}
            {/*    {errors.prefectureCode && (*/}
            {/*        <p style={{ color: 'red' }}>{errors.prefectureCode.message}</p>*/}
            {/*    )}*/}
            {/*</div>*/}

            <div>
                <label>都道府県:</label>
                <select {...register('prefectureCode', {valueAsNumber: true})}>
                    <option value="">選択してください</option>
                    {prefectures.map((pref) => (
                        <option key={pref.code} value={pref.code}>
                            {pref.name}
                        </option>
                    ))}
                </select>
                {errors.prefectureCode && (
                    <p style={{color: 'red'}}>{errors.prefectureCode.message}</p>
                )}
            </div>


            <div>
                <label>市区町村:</label>
                <input type="text" {...register('city')} />
                {errors.city && <p style={{color: 'red'}}>{errors.city.message}</p>}
            </div>

            <div>
                <label>住所詳細:</label>
                <input type="text" {...register('addressLine')} />
                {errors.addressLine && (
                    <p style={{color: 'red'}}>{errors.addressLine.message}</p>
                )}
            </div>

            <div>
                <label>出欠確認:</label>
                <select {...register('attendanceStatus')}>
                    <option value="ATTENDING">出席</option>
                    <option value="NOT_ATTENDING">欠席</option>
                    <option value="PENDING">未定</option>
                </select>
                {errors.attendanceStatus && (
                    <p style={{color: 'red'}}>{errors.attendanceStatus.message}</p>
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