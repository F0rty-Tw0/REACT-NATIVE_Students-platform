import { ShellStackParamList } from '@libs/shell/types/shellScreenTypes';

declare global {
  namespace ReactNavigation {
    interface AppParamList extends ShellStackParamList {}
  }
}
