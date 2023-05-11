import { ActionIcon, Anchor } from '@mantine/core'
import React from 'react'

export const IconButton = ({ hef, colorScheme, iconSize, colorChange, Icon }) => {

    return (
        <Anchor href={hef} target="_blank">
            <ActionIcon >
                <Icon
                    size={iconSize}
                    strokeWidth={2}
                    color={colorChange}
                />
            </ActionIcon>
        </Anchor>
    )
}
