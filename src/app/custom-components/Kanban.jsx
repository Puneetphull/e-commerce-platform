import React from "react";
import { Dropdown, ButtonGroup, Button } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisH,
  faEye,
  faEdit,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

export function Kanban() {
  return (
    <div>
      <div class="kanban-container py-4 px-0 container-fluid">
        <div class="d-flex flex-nowrap row">
          <div
            data-rbd-droppable-id="0b8095e8-d85a-44c1-801a-0bc0ce853b32"
            data-rbd-droppable-context-id="0"
            class="col-xxl-3 col-xl-4 col-lg-6 col-12"
          >
            <div class="d-flex justify-content-between align-items-center kanban-title-container mb-2">
              <h5 class="kanban-title d-flex align-items-center w-100 fs-6 fw-bold p-2 m-0">
                To do
              </h5>
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  as={Button}
                  split
                  variant="link"
                  className="text-dark m-0 p-0"
                >
                  <span className="icon icon-sm">
                    <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <FontAwesomeIcon icon={faEye} className="me-2" /> Add New
                    Card
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <FontAwesomeIcon icon={faEdit} className="me-2" /> Copy Card
                  </Dropdown.Item>
                  <Dropdown.Item className="text-danger">
                    <FontAwesomeIcon icon={faTrashAlt} className="me-2" />{" "}
                    Remove
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div class="kanban-list list-group">
              <div
                data-rbd-draggable-context-id="0"
                data-rbd-draggable-id="70e10159-122f-483a-9ead-0814112cfd00"
                tabindex="0"
                role="button"
                aria-describedby="rbd-hidden-text-0-hidden-text-0"
                data-rbd-drag-handle-draggable-id="70e10159-122f-483a-9ead-0814112cfd00"
                data-rbd-drag-handle-context-id="0"
                draggable="false"
                class="p-4 card border-1"
              >
                <div class="d-flex align-items-center justify-content-between border-0 p-0 mb-3 card-header">
                  <h5 class="mb-0">Redesign homepage</h5>
                  <div>
                    <div class="dropdown">
                      <button
                        id="react-aria174213175-5"
                        aria-expanded="false"
                        type="button"
                        class="fs-6 px-1 py-0 dropdown-toggle btn btn-link btn-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="icon icon-xs text-gray-500"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                          <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="p-0 card-body">
                  <img
                    src="https://demo.themesberg.com/volt-pro-react/static/media/themesberg-mockup.0d3a7e70.jpg"
                    class="card-img-top mb-2 mb-lg-3"
                    alt=""
                  />
                  <p>
                    On line 672 you define $table_variants. Each instance of
                    "color-level" needs to be changed to "shift-color".
                  </p>
                  <h5 class="fs-6 fw-normal mt-4">2 Assignees</h5>
                  <div class="avatar-group">
                    <a class="avatar ms-0 card-link" href="#Ryan Tompson">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-1.508e07ee.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                    <a class="avatar ms-0 card-link" href="#Alexander Smith">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-2.95cc79ae.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-rbd-draggable-context-id="0"
                data-rbd-draggable-id="b6bed9ec-67d6-43a1-bc9c-8f0fc063a620"
                tabindex="0"
                role="button"
                aria-describedby="rbd-hidden-text-0-hidden-text-0"
                data-rbd-drag-handle-draggable-id="b6bed9ec-67d6-43a1-bc9c-8f0fc063a620"
                data-rbd-drag-handle-context-id="0"
                draggable="false"
                class="p-4 card border-1"
              >
                <div class="d-flex align-items-center justify-content-between border-0 p-0 mb-3 card-header">
                  <h5 class="mb-0">Upgrade bootstrap version to latest</h5>
                  <div>
                    <div class="dropdown">
                      <button
                        id="react-aria174213175-6"
                        aria-expanded="false"
                        type="button"
                        class="fs-6 px-1 py-0 dropdown-toggle btn btn-link btn-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="icon icon-xs text-gray-500"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                          <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="p-0 card-body">
                  <p>
                    On line 672 you define $table_variants. Each instance of
                    "color-level" needs to be changed to "shift-color".
                  </p>
                  <h5 class="fs-6 fw-normal mt-4">2 Assignees</h5>
                  <div class="avatar-group">
                    <a class="avatar ms-0 card-link" href="#Ryan Tompson">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-1.508e07ee.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                    <a class="avatar ms-0 card-link" href="#Alexander Smith">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-2.95cc79ae.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-rbd-droppable-id="5a46de29-b25c-41a7-a794-c650387597ac"
            data-rbd-droppable-context-id="0"
            class="col-xxl-3 col-xl-4 col-lg-6 col-12"
          >
            <div class="d-flex justify-content-between align-items-center kanban-title-container mb-2">
              <h5 class="kanban-title d-flex align-items-center w-100 fs-6 fw-bold p-2 m-0">
                In progress
              </h5>
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  as={Button}
                  split
                  variant="link"
                  className="text-dark m-0 p-0"
                >
                  <span className="icon icon-sm">
                    <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <FontAwesomeIcon icon={faEye} className="me-2" /> Add New
                    Card
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <FontAwesomeIcon icon={faEdit} className="me-2" /> Copy Card
                  </Dropdown.Item>
                  <Dropdown.Item className="text-danger">
                    <FontAwesomeIcon icon={faTrashAlt} className="me-2" />{" "}
                    Remove
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div class="kanban-list list-group">
              <div
                data-rbd-draggable-context-id="0"
                data-rbd-draggable-id="b772f3e3-7abf-40eb-91e9-f075bad57dca"
                tabindex="0"
                role="button"
                aria-describedby="rbd-hidden-text-0-hidden-text-0"
                data-rbd-drag-handle-draggable-id="b772f3e3-7abf-40eb-91e9-f075bad57dca"
                data-rbd-drag-handle-context-id="0"
                draggable="false"
                class="p-4 card border-1"
              >
                <div class="d-flex align-items-center justify-content-between border-0 p-0 mb-3 card-header">
                  <h5 class="mb-0">Design banner</h5>
                  <div>
                    <div class="dropdown">
                      <button
                        id="react-aria174213175-8"
                        aria-expanded="false"
                        type="button"
                        class="fs-6 px-1 py-0 dropdown-toggle btn btn-link btn-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="icon icon-xs text-gray-500"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                          <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="p-0 card-body">
                  <p>
                    On line 672 you define $table_variants. Each instance of
                    "color-level" needs to be changed to "shift-color".
                  </p>
                  <h5 class="fs-6 fw-normal mt-4">2 Assignees</h5>
                  <div class="avatar-group">
                    <a class="avatar ms-0 card-link" href="#Bonnie Green">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-3.55d8a646.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                    <a class="avatar ms-0 card-link" href="#Scott Anderson">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-4.feacbe49.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-rbd-draggable-context-id="0"
                data-rbd-draggable-id="41cf4625-99eb-4c5b-ac62-750033007aa8"
                tabindex="0"
                role="button"
                aria-describedby="rbd-hidden-text-0-hidden-text-0"
                data-rbd-drag-handle-draggable-id="41cf4625-99eb-4c5b-ac62-750033007aa8"
                data-rbd-drag-handle-context-id="0"
                draggable="false"
                class="p-4 card border-1"
              >
                <div class="d-flex align-items-center justify-content-between border-0 p-0 mb-3 card-header">
                  <h5 class="mb-0">Redesign homepage</h5>
                  <div>
                    <div class="dropdown">
                      <button
                        id="react-aria174213175-9"
                        aria-expanded="false"
                        type="button"
                        class="fs-6 px-1 py-0 dropdown-toggle btn btn-link btn-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="icon icon-xs text-gray-500"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                          <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="p-0 card-body">
                  <img
                    src="https://demo.themesberg.com/volt-pro-react/static/media/themesberg-mockup.0d3a7e70.jpg"
                    class="card-img-top mb-2 mb-lg-3"
                    alt=""
                  />
                  <p>
                    On line 672 you define $table_variants. Each instance of
                    "color-level" needs to be changed to "shift-color".
                  </p>
                  <h5 class="fs-6 fw-normal mt-4">2 Assignees</h5>
                  <div class="avatar-group">
                    <a class="avatar ms-0 card-link" href="#Ryan Tompson">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-1.508e07ee.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                    <a class="avatar ms-0 card-link" href="#Alexander Smith">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-2.95cc79ae.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-rbd-droppable-id="e6b02e6f-70ce-493f-8da7-03844abf95bf"
            data-rbd-droppable-context-id="0"
            class="col-xxl-3 col-xl-4 col-lg-6 col-12"
          >
            <div class="d-flex justify-content-between align-items-center kanban-title-container mb-2">
              <h5 class="kanban-title d-flex align-items-center w-100 fs-6 fw-bold p-2 m-0">
                Done
              </h5>
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  as={Button}
                  split
                  variant="link"
                  className="text-dark m-0 p-0"
                >
                  <span className="icon icon-sm">
                    <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <FontAwesomeIcon icon={faEye} className="me-2" /> Add New
                    Card
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <FontAwesomeIcon icon={faEdit} className="me-2" /> Copy Card
                  </Dropdown.Item>
                  <Dropdown.Item className="text-danger">
                    <FontAwesomeIcon icon={faTrashAlt} className="me-2" />{" "}
                    Remove
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div class="kanban-list list-group">
              <div
                data-rbd-draggable-context-id="0"
                data-rbd-draggable-id="8d8e77cd-4974-4727-9caa-7aeabd8c2325"
                tabindex="0"
                role="button"
                aria-describedby="rbd-hidden-text-0-hidden-text-0"
                data-rbd-drag-handle-draggable-id="8d8e77cd-4974-4727-9caa-7aeabd8c2325"
                data-rbd-drag-handle-context-id="0"
                draggable="false"
                class="p-4 card border-1"
              >
                <div class="d-flex align-items-center justify-content-between border-0 p-0 mb-3 card-header">
                  <h5 class="mb-0">Redesign homepage</h5>
                  <div>
                    <div class="dropdown">
                      <button
                        id="react-aria174213175-12"
                        aria-expanded="false"
                        type="button"
                        class="fs-6 px-1 py-0 dropdown-toggle btn btn-link btn-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="icon icon-xs text-gray-500"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                          <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="p-0 card-body">
                  <img
                    src="https://demo.themesberg.com/volt-pro-react/static/media/themesberg-mockup.0d3a7e70.jpg"
                    class="card-img-top mb-2 mb-lg-3"
                    alt=""
                  />
                  <p>
                    On line 672 you define $table_variants. Each instance of
                    "color-level" needs to be changed to "shift-color".
                  </p>
                  <h5 class="fs-6 fw-normal mt-4">2 Assignees</h5>
                  <div class="avatar-group">
                    <a class="avatar ms-0 card-link" href="#Alexander Smith">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-2.95cc79ae.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                    <a class="avatar ms-0 card-link" href="#Ryan Tompson">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-1.508e07ee.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-rbd-droppable-id="f946c4c8-145a-49d2-8d07-1aeda2f1ddc4"
            data-rbd-droppable-context-id="0"
            class="col-xxl-3 col-xl-4 col-lg-6 col-12"
          >
            <div class="d-flex justify-content-between align-items-center kanban-title-container mb-2">
              <h5 class="kanban-title d-flex align-items-center w-100 fs-6 fw-bold p-2 m-0">
                Deployed
              </h5>
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle
                  as={Button}
                  split
                  variant="link"
                  className="text-dark m-0 p-0"
                >
                  <span className="icon icon-sm">
                    <FontAwesomeIcon icon={faEllipsisH} className="icon-dark" />
                  </span>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    <FontAwesomeIcon icon={faEye} className="me-2" /> Add New
                    Card
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <FontAwesomeIcon icon={faEdit} className="me-2" /> Copy Card
                  </Dropdown.Item>
                  <Dropdown.Item className="text-danger">
                    <FontAwesomeIcon icon={faTrashAlt} className="me-2" />{" "}
                    Remove
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div class="kanban-list list-group">
              <div
                data-rbd-draggable-context-id="0"
                data-rbd-draggable-id="3ddfde00-fed6-4904-b4d1-82cbc9aec6eb"
                tabindex="0"
                role="button"
                aria-describedby="rbd-hidden-text-0-hidden-text-0"
                data-rbd-drag-handle-draggable-id="3ddfde00-fed6-4904-b4d1-82cbc9aec6eb"
                data-rbd-drag-handle-context-id="0"
                draggable="false"
                class="p-4 card border-1"
              >
                <div class="d-flex align-items-center justify-content-between border-0 p-0 mb-3 card-header">
                  <h5 class="mb-0">variables.scss problems</h5>
                  <div>
                    <div class="dropdown">
                      <button
                        id="react-aria174213175-19"
                        aria-expanded="false"
                        type="button"
                        class="fs-6 px-1 py-0 dropdown-toggle btn btn-link btn-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="icon icon-xs text-gray-500"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                          <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="p-0 card-body">
                  <p>
                    On line 672 you define $table_variants. Each instance of
                    "color-level" needs to be changed to "shift-color".
                  </p>
                  <h5 class="fs-6 fw-normal mt-4">3 Assignees</h5>
                  <div class="avatar-group">
                    <a class="avatar ms-0 card-link" href="#Ryan Tompson">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-1.508e07ee.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                    <a class="avatar ms-0 card-link" href="#Alexander Smith">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-2.95cc79ae.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                    <a class="avatar ms-0 card-link" href="#Bonnie Green">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-3.55d8a646.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-rbd-draggable-context-id="0"
                data-rbd-draggable-id="4af4e0ea-2dd8-48c5-973c-48f7d43e13fc"
                tabindex="0"
                role="button"
                aria-describedby="rbd-hidden-text-0-hidden-text-0"
                data-rbd-drag-handle-draggable-id="4af4e0ea-2dd8-48c5-973c-48f7d43e13fc"
                data-rbd-drag-handle-context-id="0"
                draggable="false"
                class="p-4 card border-1"
              >
                <div class="d-flex align-items-center justify-content-between border-0 p-0 mb-3 card-header">
                  <h5 class="mb-0">variables.scss problems</h5>
                  <div>
                    <div class="dropdown">
                      <button
                        id="react-aria174213175-16"
                        aria-expanded="false"
                        type="button"
                        class="fs-6 px-1 py-0 dropdown-toggle btn btn-link btn-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="icon icon-xs text-gray-500"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                          <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="p-0 card-body">
                  <p>
                    On line 672 you define $table_variants. Each instance of
                    "color-level" needs to be changed to "shift-color".
                  </p>
                  <h5 class="fs-6 fw-normal mt-4">3 Assignees</h5>
                  <div class="avatar-group">
                    <a class="avatar ms-0 card-link" href="#Ryan Tompson">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-1.508e07ee.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                    <a class="avatar ms-0 card-link" href="#Alexander Smith">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-2.95cc79ae.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                    <a class="avatar ms-0 card-link" href="#Bonnie Green">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-3.55d8a646.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-rbd-draggable-context-id="0"
                data-rbd-draggable-id="a9de0f3f-46c3-497c-b7ba-14dc75a5f230"
                tabindex="0"
                role="button"
                aria-describedby="rbd-hidden-text-0-hidden-text-0"
                data-rbd-drag-handle-draggable-id="a9de0f3f-46c3-497c-b7ba-14dc75a5f230"
                data-rbd-drag-handle-context-id="0"
                draggable="false"
                class="p-4 card border-1"
              >
                <div class="d-flex align-items-center justify-content-between border-0 p-0 mb-3 card-header">
                  <h5 class="mb-0">variables.scss problems</h5>
                  <div>
                    <div class="dropdown">
                      <button
                        id="react-aria174213175-14"
                        aria-expanded="false"
                        type="button"
                        class="fs-6 px-1 py-0 dropdown-toggle btn btn-link btn-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="icon icon-xs text-gray-500"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                          <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="p-0 card-body">
                  <p>
                    On line 672 you define $table_variants. Each instance of
                    "color-level" needs to be changed to "shift-color".
                  </p>
                  <h5 class="fs-6 fw-normal mt-4">3 Assignees</h5>
                  <div class="avatar-group">
                    <a class="avatar ms-0 card-link" href="#Ryan Tompson">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-1.508e07ee.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                    <a class="avatar ms-0 card-link" href="#Alexander Smith">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-2.95cc79ae.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                    <a class="avatar ms-0 card-link" href="#Bonnie Green">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-3.55d8a646.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-rbd-draggable-context-id="0"
                data-rbd-draggable-id="55a64cd1-39cd-4516-b46f-fcab669d38fc"
                tabindex="0"
                role="button"
                aria-describedby="rbd-hidden-text-0-hidden-text-0"
                data-rbd-drag-handle-draggable-id="55a64cd1-39cd-4516-b46f-fcab669d38fc"
                data-rbd-drag-handle-context-id="0"
                draggable="false"
                class="p-4 card border-1"
              >
                <div class="d-flex align-items-center justify-content-between border-0 p-0 mb-3 card-header">
                  <h5 class="mb-0">Redesign homepage</h5>
                  <div>
                    <div class="dropdown">
                      <button
                        id="react-aria174213175-15"
                        aria-expanded="false"
                        type="button"
                        class="fs-6 px-1 py-0 dropdown-toggle btn btn-link btn-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          class="icon icon-xs text-gray-500"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                          <path
                            fill-rule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="p-0 card-body">
                  <img
                    src="https://demo.themesberg.com/volt-pro-react/static/media/themesberg-mockup.0d3a7e70.jpg"
                    class="card-img-top mb-2 mb-lg-3"
                    alt=""
                  />
                  <p>
                    On line 672 you define $table_variants. Each instance of
                    "color-level" needs to be changed to "shift-color".
                  </p>
                  <h5 class="fs-6 fw-normal mt-4">2 Assignees</h5>
                  <div class="avatar-group">
                    <a class="avatar ms-0 card-link" href="#Bonnie Green">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-3.55d8a646.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                    <a class="avatar ms-0 card-link" href="#Alexander Smith">
                      <img
                        src="https://demo.themesberg.com/volt-pro-react/static/media/profile-picture-2.95cc79ae.jpg"
                        class="rounded"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
