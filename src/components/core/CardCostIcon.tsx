import React from 'react';
import {
  Text,
  StyleSheet,
  View,
} from 'react-native';
import { t } from 'ttag';

import AppIcon from '@icons/AppIcon';
import ArkhamIcon from '@icons/ArkhamIcon';
import Card from '@data/Card';
import COLORS from '@styles/colors';
import StyleContext, { StyleContextType } from '@styles/StyleContext';

export function costIconSize(fontScale: number) {
  const scaleFactor = ((fontScale - 1) / 2 + 1);
  return 36 * scaleFactor;
}

interface Props {
  card: Card;
  inverted?: boolean;
  linked?: boolean;
}

export default class CardCostIcon extends React.PureComponent<Props> {
  static contextType = StyleContext;
  context!: StyleContextType;

  cardCost() {
    const {
      card,
      linked,
    } = this.props;
    if (card.type_code === 'skill') {
      return '';
    }
    if (card.code === '03016') {
      return '0';
    }
    if (card.code === '02010' ||
      card.code === '03238' ||
      card.cost === -2
    ) {
      return 'X';
    }
    if (card.permanent || card.double_sided || linked || card.linked_card) {
      return '-';
    }
    if (card.cost === null) {
      return '-';
    }
    return `${card.cost}`;
  }

  static factionIcon(card: Card): string {
    if (card.faction2_code) {
      return 'elder_sign';
    }
    if (card.faction_code === 'neutral') {
      if (card.subtype_code === 'weakness' || card.subtype_code === 'basicweakness') {
        return 'weakness';
      }
      return 'elder_sign';
    }
    if (card.faction_code) {
      return card.faction_code;
    }
    return 'elder_sign';
  }

  label() {
    const { card } = this.props;
    const level = card.xp || t`None`;
    switch (card.type_code) {
      case 'skill':
        return t`Faction: ${card.faction_name}, Level: ${level}`;
      case 'asset':
      case 'event': {
        const cost = this.cardCost();
        return t`Faction: ${card.faction_name}, Cost: ${cost}, Level: ${level}`;
      }
      case 'investigator':
        return t`Faction: ${card.faction_name}`;
      default:
        return t`Encounter set: ${card.encounter_name}`;
    }
  }

  render() {
    const {
      card,
      inverted,
    } = this.props;
    const { fontScale, colors } = this.context;
    const color = card.faction2_code ? colors.faction.dual.text : colors.faction[card.factionCode()].text;
    const textColor = !inverted ? colors.background : 'white';
    const level = (card.xp === null || card.xp === undefined) ? 'none' : `${card.xp}`;
    const scaleFactor = ((fontScale - 1) / 2 + 1);
    const ICON_SIZE = 32 * scaleFactor;
    const style = { width: costIconSize(fontScale), height: costIconSize(fontScale) };
    return (
      <View style={[styles.level, style]} accessibilityLabel={this.label()}>
        { !inverted && (
          <View style={[styles.levelIcon, style]}>
            <AppIcon
              name={`${inverted ? '' : 'inverted_'}level_${level}`}
              size={ICON_SIZE}
              color={inverted ? color : colors.background}
            />
          </View>
        ) }
        <View style={[styles.levelIcon, style]}>
          <AppIcon
            name={`${inverted ? 'inverted_' : ''}level_${level}`}
            size={ICON_SIZE}
            color={inverted ? 'white' : color}
          />
        </View>
        <View style={[styles.levelIcon, style, styles.cost]}>
          { card.type_code === 'skill' ? (
            <View style={[styles.factionIcon, card.factionCode() === 'neutral' ? { marginBottom: 0 } : {}]}>
              <ArkhamIcon
                name={CardCostIcon.factionIcon(card)}
                color={inverted ? 'white' : colors.background}
                size={ICON_SIZE / 1.8}
              />
            </View>
          ) : (
            <Text style={[
              styles.costNumber,
              { color: textColor },
              card.cost === -2 ? {
                fontFamily: 'Teutonic',
                fontSize: 24,
                paddingTop: 3,
              } : {
                fontFamily: 'cost',
                fontSize: ((card.cost || 0) >= 10 ? 14 : 18) * scaleFactor,
                paddingTop: 1,
              },
            ]} allowFontScaling={false}>
              { this.cardCost() }
            </Text>
          ) }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  level: {
    position: 'relative',
  },
  levelIcon: {
    position: 'absolute',
    top: 0,
    left: 0,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cost: {
    paddingBottom: 6,
  },
  costNumber: {
    paddingTop: 1,
    color: COLORS.white,
  },
  factionIcon: {
    marginBottom: 4,
  },
});
