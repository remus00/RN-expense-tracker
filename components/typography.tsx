import { colors } from '@/constants/theme';
import { TypoProps } from '@/types';
import { verticalScale } from '@/utils/styling';
import React from 'react';
import { Text, TextStyle } from 'react-native';

const Typography = ({
    size,
    color = colors.text,
    fontWeight = '400',
    children,
    style,
    textProps = {},
}: TypoProps) => {
    const textStyle: TextStyle = {
        fontSize: size ? verticalScale(size) : 18,
        color,
        fontWeight,
    };

    return (
        <Text style={[textStyle, style]} {...textProps}>
            {children}
        </Text>
    );
};

export default Typography;
