import styled from 'styled-components/native'
import {colors,size} from "../../../style/variables";

const TitleWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100;
`
const Title = styled.Text`
  font-weight: ${size.fontWeightBold};
  color: ${colors.primary};
  font-size: ${size.h1FontSize};
`

export {TitleWrapper,Title}