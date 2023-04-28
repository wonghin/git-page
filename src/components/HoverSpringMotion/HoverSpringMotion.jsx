import React, { useRef, useEffect } from 'react'
import { useSpring, animated, to } from '@react-spring/web'
import { useGesture } from 'react-use-gesture'
import imgs from './data'

import styles from './styles.module.css'
import { Box, Card, useMantineColorScheme, useMantineTheme } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'

const calcX = (y, ly) => -(y - ly - window.innerHeight / 2) / 20
const calcY = (x, lx) => (x - lx - window.innerWidth / 2) / 20

const wheel = (y) => {
    const imgHeight = window.innerWidth * 0.3 - 20
    return `translateY(${-imgHeight * (y < 0 ? 6 : 1) - (y % (imgHeight * 5))}px`
}

export default function HoverSpringMotion({ image, open }) {
    const theme = useMantineTheme();
    const matches = useMediaQuery(`(min-width: ${theme.breakpoints.sm}px)`);

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    useEffect(() => {
        const preventDefault = (e) => e.preventDefault()
        document.addEventListener('gesturestart', preventDefault)
        document.addEventListener('gesturechange', preventDefault)

        return () => {
            document.removeEventListener('gesturestart', preventDefault)
            document.removeEventListener('gesturechange', preventDefault)
        }
    }, [])

    const domTarget = useRef(null)
    const [{ x, y, rotateX, rotateY, rotateZ, zoom, scale }, api] = useSpring(
        () => ({
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            scale: 1,
            zoom: 0,
            x: 0,
            y: 0,
            config: { mass: 5, tension: 500, friction: 40 },
        })
    )


    useGesture(
        {
            onPinch: ({ offset: [d, a] }) => api({ zoom: d / 200, rotateZ: a }),
            onMove: ({ xy: [px, py], dragging }) =>
                !dragging &&
                api({
                    rotateX: calcX(py, y.get()),
                    rotateY: calcY(px, x.get()),
                    scale: 1.03,
                }),
            onHover: ({ hovering }) =>
                !hovering && api({ rotateX: 0, rotateY: 0, scale: 1 }),

        },
        { domTarget, eventOptions: { passive: false } }
    )
    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            justifyContent: 'center',
        }}>

            <animated.div
                ref={domTarget}
                className={matches ? styles.card : styles.phoneSizeCard}

                style={matches ? {
                    transform: 'perspective(100vw)',
                    x,
                    y,
                    rotateX,
                    rotateY,
                    rotateZ,
                } : {}}
                onClick={open}>
                <animated.div >
                    {imgs.map((img, i) => (
                        <div key={i} style={{ backgroundImage: `url(${image})` }} />
                    ))}

                </animated.div>
            </animated.div>



        </Box >
    )
}
