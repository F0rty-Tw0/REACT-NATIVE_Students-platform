export interface ProfileFormInterface {
  loading: boolean;
  isFormSubmitted: boolean;
  error: string;
  profile: ProfileInterface | null;
  pictureUrl: string;
}

export interface ProfileInterface {
  name: string;
  studyProgramme: string;
}
