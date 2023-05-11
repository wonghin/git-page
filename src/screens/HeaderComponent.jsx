import { Burger, Group, MediaQuery, Switch, Header, useMantineTheme } from '@mantine/core'
import { IconMoonStars, IconSun } from '@tabler/icons-react'
import React from 'react'

export const HeaderComponent = ({ opened, setOpened, colorScheme, toggleColorScheme }) => {
    const theme = useMantineTheme();

    return (
        <Header height={{ base: 60 }} p="md">
            <Group position="apart" align={"center"}>
                <Group>
                    <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                        <Burger
                            opened={opened}
                            onClick={() => setOpened((o) => !o)}
                            size="sm"
                            color={theme.colors.gray[6]}
                            mr="xl"
                        />
                    </MediaQuery>
                </Group>
                <Group w={50} h={30}>
                    <Switch
                        checked={colorScheme === 'dark' ? true : false}
                        onLabel={<IconSun size="1.1rem" />}
                        offLabel={<IconMoonStars size="1.1rem" />}
                        onClick={() => toggleColorScheme()}
                    />
                </Group>
            </Group>
        </Header>
    )
}
