import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
import {TextPropsTemp} from '../Types/Index';
import {colors} from '../Theme/Colors';

export const TEN = 'TEN';
export const TWELVE = 'TWELVE';
export const THIRTEEN = 'THIRTEEN';

export const FORTEEN = 'FORTEEN';
export const FIFTEEN = 'FIFTEEN';

export const SIXTEEN = 'SIXTEEN';
export const EIGHTEEN = 'EIGHTEEN';
export const NINETEEN = 'NINETEEN';

export const TWENTY = 'TWENTY';
export const TWENTY_TWO = 'TWENTY_TWO';
export const TWENTY_FOUR = 'TWENTY_FOUR';

export const FORTY = 'FORTY';

export const NORMAL = 'normal';
export const SEMI_BOLD = 'semibold';
export const BOLD = 'bold';
export const LIGHT = 'light';
export const MEDIUM = 'medium';
export const EIGHT = 'EIGHT';
export const WHITE = 'WHITE';
export const BLACK = 'BLACK';

export const TWENTY_ONE_L = 'TWENTY_ONE_L';

const AppText = ({
  type,
  weight,
  style,
  numberOfLines,
  color,
  line,
  ...props
}: TextPropsTemp) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      style={StyleSheet.flatten([
        styles.text(type, weight, color, line),
        style,
      ])}
      {...props}
    />
  );
};

const getTextStyle = (
  type: string,
  weight: string,
  color: string,
  line: string,
) => {
  var style: TextStyle = {
    fontFamily: 'fontFamily',
  };
  switch (type) {
    case TEN:
      style['fontSize'] = 10;
      break;
    case TWELVE:
      style['fontSize'] = 12;
      break;
    case THIRTEEN:
      style['fontSize'] = 13;
      break;
    case FORTEEN:
      style['fontSize'] = 14;
      break;
    case FIFTEEN:
      style['fontSize'] = 15;
      break;
    case SIXTEEN:
      style['fontSize'] = 16;
      break;
    case EIGHTEEN:
      style['fontSize'] = 18;
      break;
    case NINETEEN:
      style['fontSize'] = 19;
      break;
    case TWENTY:
      style['fontSize'] = 20;
      break;
    case TWENTY_TWO:
      style['fontSize'] = 22;
      break;
    case TWENTY_FOUR:
      style['fontSize'] = 24;
      break;
    case FORTY:
      style['fontSize'] = 40;
      break;
    case EIGHT:
      style['fontSize'] = 8;
      break;

    default:
      style['fontSize'] = 10;
  }

  switch (weight) {
    case NORMAL:
      style['fontFamily'] = 'fontFamily';
      break;
    case BOLD:
      style['fontFamily'] = 'fontFamilyBold';
      break;
    case SEMI_BOLD:
      style['fontFamily'] = 'fontFamilySemiBold';
      break;
    case LIGHT:
      style['fontFamily'] = 'fontFamilyLight';
      break;
    default:
      style['fontFamily'] = 'fontFamily';
  }
  switch (line) {
    case TWENTY_ONE_L:
      style['lineHeight'] = 21;
      break;
  }

  switch (color) {
    case WHITE:
      style['color'] = colors.white;
      break;
    case BLACK:
      style['color'] = colors.black;
      break;
    default:
      break;
  }

  return style;
};

const styles = {
  text: (type: string, weight: string, color: string, line: string) => ({
    ...getTextStyle(type, weight, color, line),
  }),
};

export {AppText};
