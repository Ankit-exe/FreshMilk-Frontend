import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import { UserProfileForm } from "@/forms/user-profile-form/UserProfileForm";

export const UserProfile = () => {
  const { updateUser, isLoading: isGetLoading } = useUpdateMyUser();
  const { currentUser, isLoading: isUpdateLoading } = useGetMyUser();

  if (isGetLoading) {
    return <span>Loading....</span>;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }
  return (
    <div>
      <UserProfileForm currentUser={currentUser} onSave={updateUser} isLoading={isUpdateLoading} />
    </div>
  );
};
