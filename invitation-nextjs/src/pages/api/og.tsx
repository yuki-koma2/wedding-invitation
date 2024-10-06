import { ImageResponse } from '@vercel/og';

export const config = {
    runtime: 'edge',
};

export default async function handler() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 40,
                    color: 'white',
                    backgroundColor: '#4A5568',
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    src="https://www.komatsu-sawaki.com/img/header.jpeg"
                    alt="結婚指輪と花束"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%',
                        zIndex: -1,
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: '#CBD5E0',
                        mixBlendMode: 'multiply',
                        zIndex: -1,
                    }}
                />
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    zIndex: 1
                }}>
                    <h1 style={{ fontSize: '6rem', fontFamily: 'Cursive', marginBottom: '0.5em' }}>
                        Wedding Invitation
                    </h1>
                    <p style={{ fontSize: '3rem', fontFamily: 'Cursive', textAlign: 'center' }}>
                        2024/12/1 <br /> yuki & natsumi
                    </p>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}