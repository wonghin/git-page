import { useMantineTheme, Box, Stack } from '@mantine/core';


import { useMediaQuery, useViewportSize } from '@mantine/hooks';

import { Home } from '../Home';
import { About } from '../About';
import { Employment } from '../Employment';
import { Education } from '../Education';
import { useInView } from 'framer-motion';
import { create } from 'zustand';
import { useEffect } from 'react';

export const useInViewStore = create((set) => ({
    isInViewStore: {},
    setIsInViewStore: (state) => {
        set({ isInViewStore: state })
    }
}))

export function Content2({ targetRef }) {
    const { setIsInViewStore } = useInViewStore()

    const theme = useMantineTheme();

    const matches = useMediaQuery(`(min-width: ${theme.breakpoints.lg}px)`);
    const { height, width } = useViewportSize();

    return (
        <>
            {/* Home */}
            <Box h={matches ? '100vh' : 'auto'}
                ref={targetRef.refHome}>
                <Home />
            </Box>

            {/* About */}
            <Box
                h={'auto'}
                ref={targetRef.refAbout}>
                <About />
            </Box>

            {/* Employment */}
            <Box ref={targetRef.targetRef} mt={20}>
                <Employment />
            </Box>


            <Box
                // h={'100vh'}
                mt={100}
                mb={100}
                ref={targetRef.refEducation}
            >
                <Education />
            </Box>
        </>
    );
}