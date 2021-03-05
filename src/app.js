import { Notifyer } from "./Notifyer";

const App = {
  async start() {
    try {
      await Notifyer.Init();
      Notifyer.notify({
        title: "Hora do Post",
        body: "Crie algum conteúdo para ajudar a comunidade",
      });
      
    } catch (err) {
      console.log(err.message);
    }
  },
};

export { App };
