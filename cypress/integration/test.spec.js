describe("The main page loads", () => {
    it("loads successfully", () => {
        cy.visit("http://127.0.0.1:5501/index.html")
    })
})

describe("Basic Calculations", () => {
    it("can perform addition", () => {
        // Arrange
        cy.visit("http://127.0.0.1:5501/index.html")

        // Act
        // click 9
        cy.get("[data-cy=nine]").click();
        // click +
        cy.get("[data-cy=plus]").click();
        // click 2
        cy.get("[data-cy=two]").click();
        // click =
        cy.get("[data-cy=equals]").click();

        // Assert
        cy.get("[data-cy=result]").should("have.text", 11);
    })
    it("can perform multiplication", () => {
        cy.visit("http://127.0.0.1:5501/index.html")

        // click 3
        cy.get("[data-cy=three]").click();
        // click *
        cy.get("[data-cy=multiply]").click();
        // click 7
        cy.get("[data-cy=seven]").click();
        // click =
        cy.get("[data-cy=equals]").click();

        cy.get("[data-cy=result]").should("have.text", 21);
    })
})

describe("calculations with double digits", () => {
    it("can perform subtraction", () => {
        cy.visit("http://127.0.0.1:5501/index.html")

        // click 4
        cy.get("[data-cy=four]").click();
        // click 6
        cy.get("[data-cy=six]").click();
        // click subtract
        cy.get("[data-cy=subtract]").click();
        // click 2
        cy.get("[data-cy=two]").click();
        // click 8
        cy.get("[data-cy=eight]").click();
        // click equals
        cy.get("[data-cy=equals]").click();

        cy.get("[data-cy=result]").should("have.text", 18);
    })
    it("can perform division", () => {
        cy.visit("http://127.0.0.1:5501/index.html")

        // click 1
        cy.get("[data-cy=one]").click();
        // click 0
        cy.get("[data-cy=zero]").click();
        // click 0
        cy.get("[data-cy=zero]").click();
        // click /
        cy.get("[data-cy=divide]").click();
        // click 2
        cy.get("[data-cy=two]").click();
        // click 0
        cy.get("[data-cy=zero]").click();
        // click =
        cy.get("[data-cy=equals]").click();

        cy.get("[data-cy=result]").should("have.text", 5);

    })
})

describe("calculate with chained operations", () => {
    it("can perform divide and times", () => {
        cy.visit("http://127.0.0.1:5501/index.html")

        // click 9
        cy.get("[data-cy=nine]").click();
        // click 9
        cy.get("[data-cy=nine]").click();
        // click /
        cy.get("[data-cy=divide]").click();
        // click 4
        cy.get("[data-cy=four]").click();
        // click *
        cy.get("[data-cy=multiply]").click();
        // click 1
        cy.get("[data-cy=one]").click();
        // click 2
        cy.get("[data-cy=two]").click();
        // click =
        cy.get("[data-cy=equals]").click();

        cy.get("[data-cy=result]").should("have.text", 297);
    })

    it("can perform plus, times and subtract", () => {
        cy.visit("http://127.0.0.1:5501/index.html")

        // click 1012
        cy.get("[data-cy=one]").click();
        cy.get("[data-cy=zero]").click();
        cy.get("[data-cy=one]").click();
        cy.get("[data-cy=two]").click();

        // click +
        cy.get("[data-cy=plus]").click();

        // click 27
        cy.get("[data-cy=two]").click();
        cy.get("[data-cy=seven]").click();

        // click *
        cy.get("[data-cy=multiply]").click();

        // click 16
        cy.get("[data-cy=one]").click();
        cy.get("[data-cy=six]").click();

        // click -
        cy.get("[data-cy=subtract]").click();

        // click 49
        cy.get("[data-cy=four]").click();
        cy.get("[data-cy=nine]").click();

        // click =
        cy.get("[data-cy=equals]").click();

        cy.get("[data-cy=result]").should("have.text", 16575);
    })
})

describe("testing special functions", () => {
    it("test the clear button clears the display", () => {
        cy.visit("http://127.0.0.1:5501/index.html")

        // click 9
        cy.get("[data-cy=nine]").click();
        // click +
        cy.get("[data-cy=plus]").click();
        // click 2
        cy.get("[data-cy=two]").click();
        // click C
        cy.get("[data-cy=clear]").click();

        cy.get("[data-cy=result]").should("have.text", '');

    })
    it("test the sign button changes the sign", () => {
        cy.visit("http://127.0.0.1:5501/index.html")

        // click 3
        cy.get("[data-cy=three]").click();
        // click *
        cy.get("[data-cy=multiply]").click();
        // click 7
        cy.get("[data-cy=seven]").click();
        // click sign
        cy.get("[data-cy=sign]").click();

        cy.get("[data-cy=display]").should("have.text", "3*-7");
    })
})