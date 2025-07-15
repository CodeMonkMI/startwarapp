import { render, screen } from "@testing-library/react";
import { CharacterCard } from "./CharacterCard";

const baseProps = {
  name: "Luke Skywalker",
  birth_year: "19BBY",
  gender: "male",
  height: "172",
  mass: "77",
  skin_color: "fair",
  hair_color: "blond",
  eye_color: "blue",
  description: "A legendary Jedi Knight.",
  homeworld: "https://swapi.dev/api/planets/1/",
};

describe("CharacterCard", () => {
  it("renders all character info", () => {
    render(<CharacterCard {...baseProps} />);

    expect(screen.getByText(baseProps.name)).toBeInTheDocument();
    expect(screen.getByText(`Born:`)).toBeInTheDocument();
    expect(screen.getByText(baseProps.birth_year)).toBeInTheDocument();
    expect(screen.getByText(baseProps.description)).toBeInTheDocument();

    expect(screen.getByText(baseProps.gender)).toBeInTheDocument();
    expect(screen.getByText(baseProps.height)).toBeInTheDocument();
    expect(screen.getByText(baseProps.mass)).toBeInTheDocument();
    expect(screen.getByText(baseProps.skin_color)).toBeInTheDocument();
    expect(screen.getByText(baseProps.hair_color)).toBeInTheDocument();
    expect(screen.getByText(baseProps.eye_color)).toBeInTheDocument();
  });

  it("renders icons correctly", () => {
    render(<CharacterCard {...baseProps} />);
    expect(document.querySelectorAll("svg").length).toEqual(8);
  });
});
