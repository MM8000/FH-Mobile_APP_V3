import DefaultLayout from "../Layouts/DefaultLayout";

export const name = "Dude";

export default function Profile() {

  return (
    <DefaultLayout>
      <div className="mx-1 flex-col justify-center space-y-4">
        <h2 className="mt-14">{name}</h2>
          <div className="flex flex-col justify-center items-center">
          <div className="mt-14 w-32 h-32 bg-gradient-to-br from-greenblue to-seablue rounded-full shadow-lg shadow-black hover:shadow-transparent"></div>
          <p className="mt-3">Profil bearbeiten</p>
        </div>
        <p>Aktueller Trainingsplan</p>
        <div className="h-28 bg-greybg rounded-3xl flex items-center gap-4">
          <div className="flex justify-center items-center ml-5 bg-slate-400 w-12 h-12 rounded-full align-middle">
            <p>40%</p>
          </div>
          <div className="flex flex-col">
            <p>Titel des Programms</p>
            <p className="text-xs">1 von 8 geschafft</p>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
