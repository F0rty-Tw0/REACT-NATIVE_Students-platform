export interface ProfileFormInterface {
  loading: boolean;
  isFormSubmitted: boolean;
  error: string;
  profile: ProfileInterface | null;
}

export interface ProfileInterface {
  pictureUrl: string;
  name: string;
  studyProgramme: string;
}
