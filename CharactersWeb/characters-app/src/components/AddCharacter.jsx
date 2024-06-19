/* eslint-disable react/prop-types */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

const AddCharacterModal = ({
  isOpen,
  onClose,
  onSubmit,
  newCharacter,
  handleInputChange,
  handleFileChange,
}) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="text-center sm:ml-4 sm:text-left w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        Adicionar Novo Personagem
                      </Dialog.Title>
                      <form onSubmit={onSubmit} className="mt-6 space-y-6">
                        <div className="space-y-4">
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Nome
                            </label>
                            <div className="mt-1">
                              <input
                                type="text"
                                name="name"
                                id="name"
                                value={newCharacter.name}
                                onChange={handleInputChange}
                                required
                                className="block w-full rounded-md border-gray-300 shadow-sm"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="description"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Descrição
                            </label>
                            <div className="mt-1">
                              <textarea
                                id="description"
                                name="description"
                                rows="3"
                                value={newCharacter.description}
                                onChange={handleInputChange}
                                required
                                className="block w-full rounded-md border-gray-300 shadow-sm resize-none"
                              />
                            </div>
                          </div>

                          <div className="mt-4">
                            <label
                              htmlFor="picture"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Imagem
                            </label>
                            <div className="mt-1">
                              <label
                                htmlFor="file-upload"
                                className="cursor-pointer bg-white rounded-md font-medium text-blue-500 hover:text-blue-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500 px-4 py-2 inline-flex items-center justify-center border border-gray-300 shadow-sm"
                              >
                                <span>Escolher arquivo</span>
                                <input
                                  id="file-upload"
                                  name="picture"
                                  type="file"
                                  onChange={handleFileChange}
                                  className="sr-only"
                                  required
                                />
                              </label>
                            </div>
                            <span className="ml-2">
                              {newCharacter.picture
                                ? newCharacter.picture.name
                                : "Nenhum arquivo selecionado"}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-end space-x-3">
                          <button
                            type="button"
                            onClick={onClose}
                            className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50"
                          >
                            Cancelar
                          </button>
                          <button
                            type="submit"
                            className="inline-flex justify-center rounded-md bg-blue-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
                          >
                            Adicionar
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddCharacterModal;
