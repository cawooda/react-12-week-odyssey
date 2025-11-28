import Header from "./components/Header";
import AppContainer from "./components/AppContainer";
import ProfileCard from "./features/profile-card/ProfileCard";
import { ThemeProvider } from "./ThemeContext";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider>
      <AppContainer>
        <h1 className="text-3xl font-bold ">Hello Tailwind v4!</h1>
        <Header />
        <ProfileCard
          name="Andrew Cawood"
          title="Software Developer"
          avatarUrl="https://gravatar.com/avatar/efd6aa4a51d84242cdb4fb9c2c13d40e?s=400&d=robohash&r=x"
          bio="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        />
      </AppContainer>
    </ThemeProvider>
  );
}
