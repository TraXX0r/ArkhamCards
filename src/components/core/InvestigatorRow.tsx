import React, { useCallback, useContext, useMemo } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
// @ts-ignore
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {
  Placeholder,
  PlaceholderLine,
  Fade,
} from "rn-placeholder";

import ArkhamIcon from '@icons/ArkhamIcon';
import CardCostIcon from '@components/core/CardCostIcon';
import InvestigatorImage from '@components/core/InvestigatorImage';
import Card from '@data/Card';
import space, { m, s, xs } from '@styles/space';
import StyleContext, { StyleContextType } from '@styles/StyleContext';

interface Props {
  superTitle?: string;
  investigator?: Card;
  yithian?: boolean;
  description?: string;
  eliminated?: boolean;
  button?: React.ReactNode;
  bigImage?: boolean;
  onPress?: (card: Card) => void;
  onRemove?: (card: Card) => void;
  children?: React.ReactElement | React.ReactElement[];
  noFactionIcon?: boolean;
}

const ICON_SIZE = 60;
export default function InvestigatorRow({
  superTitle,
  investigator,
  yithian,
  description,
  eliminated,
  button,
  bigImage,
  onPress,
  onRemove,
  children,
  noFactionIcon,
}: Props) {
  const { backgroundStyle, borderStyle, colors, gameFont, fontScale, typography } = useContext(StyleContext);
  const { width } = useWindowDimensions();
  const handleOnPress = useCallback(() => {
    onPress && investigator && onPress(investigator);
  }, [onPress, investigator]);
  const handleOnRemove = useCallback(() => {
    onRemove && investigator && onRemove(investigator);
  }, [onRemove, investigator]);

  const backgroundColor = useMemo(() => {
    if (eliminated) {
      return colors.faction.dead.darkBackground;
    }
    return colors.faction[investigator ? investigator.factionCode() : 'neutral'].darkBackground;
  }, [eliminated, investigator, colors])

  const content = useMemo(() => {
    return (
      <View style={[
        styles.wrapper,
        backgroundStyle,
        borderStyle,
      ]}>
        { investigator ? (
          <View style={[
            styles.headerColor,
            { backgroundColor },
          ]} />
        ) : (
          <Placeholder Animation={(props) => <Fade {...props} style={{ backgroundColor: colors.M }} duration={1000} />}>
            <PlaceholderLine noMargin style={styles.headerColor} color={colors.D10} />
          </Placeholder>
        ) }
        { !!superTitle && (
          <View style={[styles.row, space.paddingLeftM, space.paddingTopS]}>
            <Text style={[typography.mediumGameFont, { fontFamily: gameFont }]}>{ superTitle }</Text>
          </View>
        ) }
        <View style={[styles.row, !superTitle ? space.paddingTopS : {}]}>
          <View style={styles.image}>
            <InvestigatorImage
              card={investigator}
              killedOrInsane={eliminated}
              yithian={yithian}
              small={!bigImage}
              border
            />
          </View>
          <View style={[styles.titleColumn, button ? styles.buttonColumn : {}, noFactionIcon ? space.marginRightM : {}]}>
            { investigator ? (
              <Text style={[
                superTitle ? typography.gameFont : typography.bigGameFont,
                { fontFamily: gameFont, color: colors.darkText },
              ]}>
                { description ? `${investigator.name}: ${description}` : investigator.name }
              </Text>
            ) : (
              <Placeholder Animation={(props) => <Fade {...props} style={{ backgroundColor: colors.L20 }} duration={1000} />}>
                <PlaceholderLine color={colors.L10} height={28 * fontScale * 0.6} width={40} style={{ marginTop: 4, marginBottom: 4 }} />
              </Placeholder>
            ) }
            { !!button && button }
          </View>
          { !noFactionIcon && (
            <View style={space.marginRightM}>
              { !onRemove && investigator && (
                <ArkhamIcon
                  name={CardCostIcon.factionIcon(investigator)}
                  size={ICON_SIZE}
                  color={colors.faction[eliminated ? 'dead' : investigator.factionCode()].background}
                />
              ) }
            </View>
          ) }
          { !!onRemove && (
            <View style={styles.closeIcon}>
              <TouchableOpacity onPress={handleOnRemove}>
                <MaterialCommunityIcons
                  name="close"
                  size={36}
                  color="#222"
                />
              </TouchableOpacity>
            </View>
          ) }
        </View>
        { !!children && children }
        { investigator ? (
          <View style={[
            styles.headerColor,
            { backgroundColor },
          ]} />
        ) : (
          <Placeholder Animation={(props) => <Fade {...props} style={{ backgroundColor: colors.M }} duration={1000} />}>
            <PlaceholderLine noMargin style={[styles.headerColor, { borderRadius: 0 }]} color={colors.D10} />
          </Placeholder>
        ) }
      </View>
    );
  }, [
    handleOnRemove,
    backgroundColor,
    investigator,
    onRemove,
    children,
    eliminated,
    button,
    description,
    yithian,
    bigImage,
    noFactionIcon,
    superTitle,
    backgroundStyle, borderStyle, colors, gameFont, typography, fontScale,
  ]);

  if (!onPress) {
    return content;
  }
  return (
    <TouchableOpacity onPress={handleOnPress}>
      { content }
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: s,
    right: s,
  },
  image: {
    marginTop: s,
    marginLeft: m,
    marginBottom: m,
    marginRight: m,
  },
  titleColumn: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: xs,
    marginTop: xs,
    marginBottom: xs,
  },
  buttonColumn: {
    alignSelf: 'flex-start',
  },
  headerColor: {
    height: 16,
  },
});
