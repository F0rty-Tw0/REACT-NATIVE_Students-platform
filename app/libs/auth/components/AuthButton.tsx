//COMPONENTS
import { MonoText } from '@libs/shared/components/StyledText';

interface ButtonProps {
  title: string;
}
export const AuthButton = ({ title }: ButtonProps) => (
  <MonoText style={{ marginHorizontal: 15, fontSize: 20, fontWeight: 'bold' }}>
    {title}
  </MonoText>
);