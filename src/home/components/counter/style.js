import styled from 'styled-components/native'
import {colors,size} from "../../../style/variables";

const CounterWrapper = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding-left: ${size.hSpacingLg};
  padding-right: ${size.hSpacingLg};
`
const CounterNumber = styled.Text`
  flex: 1;
  font-size: ${size.fontsizeLg};
  color:${colors.warning};
  text-align: center;  
  background-color: ${colors.grey5};
  margin-left: ${size.hSpacingLg};
  margin-right: ${size.hSpacingLg};
  line-height: 30;
`
export {CounterWrapper,CounterNumber}