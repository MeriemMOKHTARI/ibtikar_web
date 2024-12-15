import { useState, useEffect } from 'react'
import { ChevronDownIcon, ChartBarIcon, BuildingLibraryIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline'

// List of Algerian wilayas
const wilayas = [
  "Adrar", "Chlef", "Laghouat", "Oum El Bouaghi", "Batna", "Béjaïa", "Biskra", "Béchar", "Blida", "Bouira",
  "Tamanrasset", "Tébessa", "Tlemcen", "Tiaret", "Tizi Ouzou", "Alger", "Djelfa", "Jijel", "Sétif", "Saïda",
  "Skikda", "Sidi Bel Abbès", "Annaba", "Guelma", "Constantine", "Médéa", "Mostaganem", "M'Sila", "Mascara",
  "Ouargla", "Oran", "El Bayadh", "Illizi", "Bordj Bou Arréridj", "Boumerdès", "El Tarf", "Tindouf", "Tissemsilt",
  "El Oued", "Khenchela", "Souk Ahras", "Tipaza", "Mila", "Aïn Defla", "Naâma", "Aïn Témouchent", "Ghardaïa", "Relizane"
]

// Sample data for communes (you should replace this with actual data)
const communesByWilaya = {
  "Alger": ["Alger-Centre", "Bab El Oued", "Bologhine", "Casbah", "Hussein Dey"],
  "Oran": ["Oran", "Bir El Djir", "Es Senia", "Arzew", "Bethioua"],
  // Add more wilayas and their communes here
}

export default function Avertissements() {
  const [selectedWilaya, setSelectedWilaya] = useState('')
  const [selectedMairie, setSelectedMairie] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredData, setFilteredData] = useState([])

  const stats = [
    {
      title: "Ce jour",
      value: "1235",
      chart: true
    },
    {
      title: "Ce mois",
      value: "98765",
      chart: true
    },
    {
      title: "Cette année",
      value: "120038473",
      chart: true
    },
    {
      title: "Mauvaise wilaya",
      value: "Alger",
      icon: <BuildingLibraryIcon className="h-5 w-5 text-white" />
    },
    {
      title: "Meilleure wilaya",
      value: "Djelfa",
      icon: <BuildingLibraryIcon className="h-5 w-5 text-white" />
    }
  ]

  const tableData = [
    { id: 1, wilaya: "Alger", mairie: "Dely Ibrahim", feuRouge: "FE-04", matricule: "116444-113-16", date: "14-12-2024" },
    { id: 2, wilaya: "Sidi Bel Abbes", mairie: "Tassala", feuRouge: "FE-013", matricule: "116444-113-16", date: "14-12-2024" },
    { id: 3, wilaya: "Oran", mairie: "ES - Senia", feuRouge: "FE-45", matricule: "116444-113-16", date: "14-12-2024" },
    { id: 4, wilaya: "Telemcen", mairie: "Nadroma", feuRouge: "FE-92", matricule: "116444-113-16", date: "14-12-2024" },
    { id: 5, wilaya: "Tizi Ouzou", mairie: "Azzeffoune", feuRouge: "FE-012", matricule: "116444-113-16", date: "14-12-2024" },
    { id: 6, wilaya: "Jijel", mairie: "Ziama Mansouriah", feuRouge: "FE-001", matricule: "116444-113-16", date: "14-12-2024" },
    { id: 7, wilaya: "Temouchent", mairie: "Beni Saf", feuRouge: "FE-234", matricule: "116444-113-16", date: "14-12-2024" },
    { id: 8, wilaya: "Moustaganem", mairie: "Kharouba", feuRouge: "FE-041", matricule: "116444-113-16", date: "14-12-2024" },
    { id: 9, wilaya: "Tipaza", mairie: "Cherchel", feuRouge: "FE-0453", matricule: "116444-113-16", date: "14-12-2024" },
    { id: 10, wilaya: "Ain Defla", mairie: "Khemis Melyana", feuRouge: "FE-04231", matricule: "116444-113-16", date: "14-12-2024" },
  ]

  useEffect(() => {
    filterData()
  }, [selectedWilaya, selectedMairie, searchTerm])

  const filterData = () => {
    let filtered = tableData

    if (selectedWilaya) {
      filtered = filtered.filter(item => item.wilaya === selectedWilaya)
    }

    if (selectedMairie) {
      filtered = filtered.filter(item => item.mairie === selectedMairie)
    }

    if (searchTerm) {
      filtered = filtered.filter(item => 
        Object.values(item).some(val => 
          val.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    }

    setFilteredData(filtered)
  }

  return (
      <div className="p-6 max-w-[1600px] mx-auto bg-white">
        {/* Stats Section */}
       
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-[#EBF5FF] rounded-lg p-4 flex justify-between items-center">
              <div>
                <p className="text-gray-600 text-sm">{stat.title}</p>
                <p className="text-xl font-semibold mt-1">{stat.value}</p>
              </div>
              {stat.chart ? (
                <ChartBarIcon className="h-8 w-8 text-blue-500" />
              ) : (
                <div className="bg-blue-500 p-2 rounded-full">
                  {stat.icon}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Filters Section */}
        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex gap-4">
            <div className="relative">
              <select
                value={selectedWilaya}
                onChange={(e) => {
                  setSelectedWilaya(e.target.value)
                  setSelectedMairie('')
                }}
                className="appearance-none bg-white px-4 py-2 pr-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">La wilaya</option>
                {wilayas.map((wilaya) => (
                  <option key={wilaya} value={wilaya}>{wilaya}</option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
            <div className="relative">
              <select
                value={selectedMairie}
                onChange={(e) => setSelectedMairie(e.target.value)}
                className="appearance-none bg-white px-4 py-2 pr-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">La commune</option>
                {selectedWilaya && communesByWilaya[selectedWilaya]?.map((commune) => (
                  <option key={commune} value={commune}>{commune}</option>
                ))}
              </select>
              <ChevronDownIcon className="absolute right-2 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-lg overflow-hidden flex-grow flex flex-col">
          <div className="overflow-x-auto flex-grow">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Wilaya</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mairie</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID Feu-rouge</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Matricule</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredData.map((row, index) => (
                  <tr key={row.id} className={index % 2 === 0 ? 'bg-[#EBF5FF]' : 'bg-white'}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.wilaya}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.mairie}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.feuRouge}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {row.matricule}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{row.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <PencilIcon className="h-5 w-5" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {/* Pagination */}
          <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-center">
              <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                <button className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Previous
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  1
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  2
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  ...
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  9
                </button>
                <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
                  10
                </button>
                <button className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
  )
}

