import { ActionIcon, Anchor, Transition, useMantineColorScheme } from '@mantine/core'
import { useHover } from '@mantine/hooks';
import { useSpring, animated } from '@react-spring/web';
import React from 'react'
import { BrandInstagram } from 'tabler-icons-react'

export const HoverEnlarge = (component) => {
    const [props, set] = useSpring(() => ({
        scale: 1,
        config: { mass: 1, tension: 170, friction: 5 },
    }));
    return (
        <animated.div
            onMouseEnter={() => set({ scale: 1.2 })}
            onMouseLeave={() => set({ scale: 1 })}
            style={{
                display: 'inline-block',
                transform: props.scale.to((s) => `scale(${s})`),
            }}
        >
            {component.children}

        </animated.div>

    )
}
