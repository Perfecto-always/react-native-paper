import * as React from 'react';
import { StyleSheet, View, ViewStyle, Image, StyleProp } from 'react-native';
import { withTheme } from '../../core/theming';
import { grey200 } from '../../styles/themes/v2/colors';
import type { Theme } from '../../types';
import { getCardCoverStyle } from './utils';

type Props = React.ComponentPropsWithRef<typeof Image> & {
  /**
   * @internal
   */
  index?: number;
  /**
   * @internal
   */
  total?: number;
  style?: StyleProp<ViewStyle>;
  /**
   * @optional
   */
  theme: Theme;
};

/**
 * A component to show a cover image inside a Card.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="small" src="screenshots/card-cover.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Card } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Card>
 *     <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
 *   </Card>
 * );
 *
 * export default MyComponent;
 * ```
 *
 * @extends Image props https://reactnative.dev/docs/image#props
 */
const CardCover = ({ index, total, style, theme, ...rest }: Props) => {
  const coverStyle = getCardCoverStyle({ theme, index, total });

  return (
    <View style={[styles.container, coverStyle, style]}>
      <Image {...rest} style={[styles.image, coverStyle]} />
    </View>
  );
};

CardCover.displayName = 'Card.Cover';
const styles = StyleSheet.create({
  container: {
    height: 195,
    backgroundColor: grey200,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
    padding: 16,
    justifyContent: 'flex-end',
  },
});

export default withTheme(CardCover);

// @component-docs ignore-next-line
export { CardCover };
