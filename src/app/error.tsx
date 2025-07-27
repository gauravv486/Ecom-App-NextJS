'use client'

// import { AlertTriangle, RefreshCw, Home, ArrowLeft } from 'lucide-react'

// export default function Error() {
//   const handleRetry = () => {
//     window.location.reload()
//   }

//   const handleGoHome = () => {
//     window.location.href = '/'
//   }

//   const handleGoBack = () => {
//     window.history.back()
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-8">
//       <div className="max-w-md w-full bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
//         {/* Error Icon */}
//         <div className="mx-auto flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
//           <AlertTriangle className="w-8 h-8 text-red-600" />
//         </div>

//         {/* Error Message */}
//         <h1 className="text-2xl font-semibold text-gray-900 mb-3">
//           Something went wrong
//         </h1>
        
//         <p className="text-gray-600 mb-2">
//           We're having trouble loading your data right now.
//         </p>
        
//         <p className="text-sm text-gray-500 mb-8">
//           This might be a temporary issue. Please try again in a few moments.
//         </p>

//         {/* Action Buttons */}
//         <div className="space-y-3">
//           <button
//             onClick={handleRetry}
//             className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-md transition-colors duration-200"
//           >
//             <RefreshCw className="w-4 h-4" />
//             Try Again
//           </button>
          
//           <div className="flex gap-3">
//             <button
//               onClick={handleGoBack}
//               className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-md transition-colors duration-200"
//             >
//               <ArrowLeft className="w-4 h-4" />
//               Go Back
//             </button>
            
//             <button
//               onClick={handleGoHome}
//               className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2.5 px-4 rounded-md transition-colors duration-200"
//             >
//               <Home className="w-4 h-4" />
//               Home
//             </button>
//           </div>
//         </div>

//         {/* Additional Info */}
//         <div className="mt-8 pt-6 border-t border-gray-100">
//           <p className="text-xs text-gray-500">
//             If this problem persists, please contact our support team.
//           </p>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="mt-8 text-center">
//         <p className="text-sm text-gray-500">
//           Error Code: API_FETCH_FAILED
//         </p>
//       </div>
//     </div>
//   )
// }

