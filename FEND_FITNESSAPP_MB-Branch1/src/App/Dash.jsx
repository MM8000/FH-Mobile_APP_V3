import Profile from "./Profile";
import { useQuery, gql } from "@apollo/client";
import DefaultLayout from "../Layouts/DefaultLayout";
import { name } from "./Profile";

const PROGRAMS = gql`
  query Programs {
    programs {
      id
      name
      focus
      duration
    }
  }
`;

export default function Dash() {
  const { data, loading, error } = useQuery(PROGRAMS);
  console.log(data, loading, error);

  if (loading) {
    return <h2>Loading, please weight... </h2>;
  }
  if (window.matchMedia("(orientation: landscape)").matches) {
    return (
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundImage: "url('./images/uparrow.gif')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h2>Please hold device upright</h2>
      </div>
    );
  }
  if (error) {
    return <h2>Something went wrong...</h2>;
  }

  return (
    <DefaultLayout>
      <div className="my-1 mx-1 flex-col justify-center">
        <h1 className="my-10 text-4xl text-white font-bold">Hi {name}!</h1>
        <div className="flex justify-center">
          <img className="w-10/12" src="./images/homescreen.svg" />
        </div>
        <div className="mt-10 flex justify-between items-baseline">
          <h2>Dein Workout heute</h2>
          <p className="text-xs">Trainingsplan</p>
        </div>
        <div className="h-52 w-full bg-greybg rounded-3xl mt-10 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-32">
          <div className="h-full m-5 sm:m-7 flex flex-col justify-end">
            <h3 className="text-lg font-bold leading-7">Tag 2</h3>
            <h2>{data.programs[0].name}</h2>
            <p className="mb-5 text-xs">
              {data.programs[0].duration} Min. · {data.programs[0].focus}
            </p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
