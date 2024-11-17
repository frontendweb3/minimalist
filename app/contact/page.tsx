import React from 'react';
import { Button } from "@/components/ui/button"
import { SendHorizontal } from "lucide-react"
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact us - Built Minimalist website.',
}
export default function Contact() {

  return (
    <section className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center ">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center sm:text-xl">Send feedback about us if you have any queries or questions. Ask our team in the office—our time reply on office time.</p>
      <form action="#" className="space-y-8">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium ">Your email</label>
          <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@frontendweb.dev" required />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium ">Subject</label>
          <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block mb-2 text-sm font-medium ">Your message</label>
          <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..."></textarea>
        </div>

        <Button>
          <SendHorizontal /> Submit Message
        </Button>

      </form>
    </section>
  )
}

