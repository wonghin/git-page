import React from 'react';
import { Box } from '@mantine/core';


// @ts-ignore
import { motion } from "framer-motion"

export const ScrollFadeLeft = (props) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: '-60%' }}
            whileInView={{ opacity: 1, x: 0 }}
            // transition={{ duration: 0.4 }}
            transition={{ ease: "easeOut", duration: 0.6 }}
            animate={{


            }}

            viewport={{ once: true }}
        >
            <Box my={20}>
                {props.children}
            </Box>

        </motion.div>
    );
};