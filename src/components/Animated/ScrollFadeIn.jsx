import React, { useRef, useState, useEffect } from 'react';
import { Blockquote, Box, Card, Paper, useMantineColorScheme, useMantineTheme } from '@mantine/core';


// @ts-ignore
import { motion, useReducedMotion } from "framer-motion"

export const ScrollFadeIn = (props, time) => {
    const contentRef = useRef(null);
    return (
        <motion.div
            initial={{ opacity: 0, y: "10vh" }}
            whileInView={{ opacity: 1, y: '-1vh' }}
            // transition={{ duration: 0.4 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
            animate={{


            }}

        // viewport={{ once: true }}    
        >
            <Box my={20}>
                {props.children}
            </Box>

        </motion.div>
    );
};