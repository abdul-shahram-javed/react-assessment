import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Ballot from "../src/Components/Ballot/Ballot";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders user data", async () => {
  const fakeCategories = {
    items: [
      {
        id: "best-picture",
        items: [
          {
            title: 'Nomadland',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/nomadland_ver2.jpg',
            id: 'nomadland'
          },
          {
            title: 'The Trial of the Chicago 7',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/trial_of_the_chicago_seven.jpg',
            id: 'the-trial-of-the-chicago-7'
          },
          {
            title: 'Minari',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/Minari.jpg',
            id: 'minari'
          },
          {
            title: 'Mank',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/mank.jpg',
            id: 'mank'
          },
          {
            title: 'One Night in Miami',
            photoUrL: 'https://variety.com/wp-content/uploads/2020/12/one_night_in_miami.jpg',
            id: 'one-night-in-miami'
          },
        ],
        title: "Best Picture"
      },
    ]
    }

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeCategories)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<Ballot />, container);
  });

  console.log(container.container.firstChild.className)
//   expect(container.querySelector("summary").textContent).toBe(fakeCategories.name);
//   expect(container.querySelector("strong").textContent).toBe(fakeCategories.age);
//   expect(container.textContent).toContain(fakeCategories.address);

  // remove the mock to ensure tests are completely isolated
  global.fetch.mockRestore();
});