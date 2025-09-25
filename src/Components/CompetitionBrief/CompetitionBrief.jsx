import React from 'react'

function CompetitionBrief() {
  return <>
        <h2 className="text-xl font-semibold mb-4">Competition Brief</h2>
        <div className="space-y-4">
          <p className="text-gray-600">Design a comprehensive mobile banking app that includes features like account overview, transaction history, money transfers, bill payments, and investment tracking. The app should follow modern design principles and provide an intuitive user experience.</p>
          
          <div>
            <h4 className="font-semibold mb-2">Requirements:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
              <li>Mobile-first responsive design</li>
              <li>Dark and light mode support</li>
              <li>Accessibility compliance (WCAG 2.1)</li>
              <li>Modern UI/UX patterns</li>
              <li>Clean and professional aesthetic</li>
            </ul>
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="text-sm text-gray-600">
              <span className="font-medium">Timeline:</span> Nov 15, 2024 - Nov 28, 2024
            </div>
            {/* <span className="px-3 py-1 text-sm bg-gray-100 text-center text-gray-800 rounded-full">Mobile Design</span> */}
          </div>
        </div>
    </>
}

export default CompetitionBrief
