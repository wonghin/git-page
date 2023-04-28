import { ActionIcon, useMantineColorScheme } from '@mantine/core'
import { useHover } from '@mantine/hooks';
import React from 'react'
import { BrandInstagram } from 'tabler-icons-react'

export const IconButton = ({ IconComponent }) => {
    // const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    // const colorChange = colorScheme === "dark" ? "white" : "black";
    // const iconSize = 40;

    const hover = useHover()


    return (
        <ActionIcon variant="transparent"
            sx={hover.hovered ? { transform: 'scale(10)', transition: 'all .2s ease-in-out' } : { transform: 'scale(1)', transition: 'all .3s ease-in-out' }

            }
        >
            {IconComponent}
        </ActionIcon>
    )
}
