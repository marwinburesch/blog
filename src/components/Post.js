import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { TrashIcon } from "@heroicons/react/outline";

export default function Post({ post, delay }) {
  return (
    <Transition
      as={Fragment}
      appear={true}
      show={true}
      enter={`transition-opacity ease-in-out duration-500 delay-${delay || 0}`}
      enterFrom="transition-opacity opacity-0"
      enterTo="opacity-100"
      leave={`transition-opacity ease-in-out duration-500 delay-${delay || 0}`}
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <article className="mt-8 p-6 max-w-md mx-auto rounded-xl border-green-300 border-2 shadow-xl cursor-pointer">
        <div className="flex flex-col">
          <h1 className="w-full text-lg font-bold">{post.title}</h1>
          <h2 className="text-right">by {post.author}</h2>
          <TrashIcon className="w-5 h-5 transform transition-transform hover:scale-125" />
        </div>
      </article>
    </Transition>
  );
}
