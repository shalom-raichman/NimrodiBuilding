import roles from "../data/roles.json";

interface IuseActivityParams {
  activity: string;
  role: string;
  activities: string[];
}

const useIsVerified = ({ activity, role, activities }: IuseActivityParams) => {
  //FILL HERE 3.7
  const indexOfActivity = activities.findIndex(a => a == activity)
  const indexOfRole = roles.findIndex(r => r == role)
  return indexOfRole >= indexOfActivity
};

export default useIsVerified;
