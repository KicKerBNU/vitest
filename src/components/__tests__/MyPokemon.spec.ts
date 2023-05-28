import { render, screen, fireEvent} from '@testing-library/vue';
import {describe, it ,expect} from 'vitest';
import MyPokemon from "../my-pokemon.vue";

describe("my-pokemon", () => {
    it("renders span correctly", async() => {
        render(MyPokemon)

        const pokemon = await screen.findByText( "Get Pokemon");
        await fireEvent.click(pokemon);
        const value = await screen.findByText("bulbasaur");

        //assert
        expect(value.innerHTML).toBe("bulbasaur");
    });

});
