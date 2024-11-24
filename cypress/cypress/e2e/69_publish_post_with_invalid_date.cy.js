import GivenPosts from "./steps/givenPosts";
import whenPosts from "./steps/whenPosts";
import thenPosts from "./steps/thenPosts";
import {faker} from "@faker-js/faker";

function generarTexto(tipo = "title", longitud = 255, semilla = null) {
    // Aplicar semilla si se proporciona
    if (semilla !== null) {
        faker.seed(semilla);
    }

    let texto = "";

    if (tipo === "title") {
        texto = faker.lorem.sentence(50); // Generar un título base
    } else if (tipo === "description") {
        texto = faker.lorem.paragraphs(5); // Generar un párrafo base
    } else {
        throw new Error("El tipo debe ser 'title' o 'description'.");
    }

    // Ajustar la longitud del texto al valor especificado
    if (texto.length > longitud) {
        return texto.substring(0, longitud).trim();
    } else {
        while (texto.length < longitud) {
            texto += " " + faker.lorem.word();
        }
        return texto.substring(0, longitud).trim();
    }
}

describe("69_publish_post_with_invalid_date", () => {
    beforeEach(() => {
        GivenPosts.givenNavigateToLoginPage();
        GivenPosts.givenLogin();
        GivenPosts.givenNavigateToPostsPage();
        faker.seed(44);
    })

    it("69_publish_post_with_invalid_date", () => {
        // Given the user clicks on "New Post" to start creating a new post
        GivenPosts.AndClicksNewPost();
        // Given the user clicks on the post title field to focus on it
        GivenPosts.AndClicksPostTitle();

        const Title1 = generarTexto("title", 27, 44);
        // Given the user inputs a title into the post title field
        GivenPosts.AndInputPostTitle(Title1);
        const formattedDate = faker.number.int({ min: 1000000000, max: 9999999999 });
        GivenPosts.AndClickSettingsPost();
        GivenPosts.AndInputDatePost(formattedDate);
        GivenPosts.AndClickTimePost();
        GivenPosts.AndClickSettingsPost();

        // Given the user clicks the "Publish" button to initiate the publishing flow
        GivenPosts.AndClickPublishPost();

        // Given the user clicks "Continue" in the publishing flow
        GivenPosts.AndClickContinuePublish();

        // Given the user clicks "Publish Right Now" to confirm the publication
        whenPosts.whenclickPostPublishRightNow();
        // Then, verify that the post has been published successfully
        thenPosts.thenVerifyPost();
    });
})