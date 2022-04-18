export interface ProfileFormInterface {
  isLoading: boolean;
  isFormSubmitted: boolean;
  error: string;
  profile: ProfileInterface | null;
  pictureUrl: string;
}

export interface ProfileInterface {
  name: string;
  studyProgramme: string;
}
