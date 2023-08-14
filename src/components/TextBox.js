import React from "react";

function TextBox() {
  return (
    <div className="flex flex-col w-1/2 border-4 gap-4 border-teal-400 rounded-lg px-6 py-4">
      <div className="mb-8">
        <div className="text-2xl font-bold">English Text</div>
        <textarea
          rows="5"
          cols="50"
          className="w-full h-full border-4 rounded-lg p-3 mt-2 resize-none"
        >
          Oli said that Parliament is not a place to sleep. Parliament should
          not be obstructed. Don't do it, don't bring the situation to do it.
          Parliament is a place where people work for the country. Parliament is
          a place to speak in favor of the country and the people. He said, "It
          is a place to protect the interests of the country and the people if
          it is in the government and pressure for protection if it is not in
          the government." Parliament is not a place to sleep.
        </textarea>
      </div>
      <div>
        <div className="text-2xl font-bold">Nepali Text</div>
        <textarea
          rows="5"
          cols="50"
          className="w-full h-full border-4 rounded-lg p-3 mt-2 resize-none"
        >
          ओलीले संसद निदाएर बस्ने थलो नभएको बताए। ‘संसद अवरोध हुनै हुँदैन। गर्नै
          हुँदैन, गर्ने परिस्थिति ल्याउनु हुँदैन। संसद देशका लागि जनताका लागि
          काम गर्ने थलो हो। संसद देश र जनताका पक्षमा बोल्ने आवाज उठाउने ठाउँ
          हो।’ उनले भने, ‘देश र जनताका हितमा सरकारमा भए रक्षा गर्ने र सरकारमा
          नभए रक्षाका निम्ति दबाब दिने थलो हो। संसद निदाएर बस्ने थलो होइन।’
        </textarea>
      </div>
    </div>
  );
}

export default TextBox;
