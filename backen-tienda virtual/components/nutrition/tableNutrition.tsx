export default function TableNutrition() {
    return (
        <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-blue-500 to-blue-700">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            Identificador del animal
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            Fecha de tratamiento
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            Dosis aplicada
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            Lugar de aplicación
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            Condición de aplicación
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            Responsable
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            Observaciones
                        </th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4 text-sm text-gray-900">3</td>
                        <td className="px-6 py-4 text-sm text-gray-900">2023-01-01</td>
                        <td className="px-6 py-4 text-sm text-gray-900">2 mL</td>
                        <td className="px-6 py-4 text-sm text-gray-900">Establo A</td>
                        <td className="px-6 py-4 text-sm">
                            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">
                                Buena
                            </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">Dr. Pérez</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                            Animal en buen estado
                        </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4 text-sm text-gray-900">5</td>
                        <td className="px-6 py-4 text-sm text-gray-900">2023-01-15</td>
                        <td className="px-6 py-4 text-sm text-gray-900">1 mL</td>
                        <td className="px-6 py-4 text-sm text-gray-900">Establo B</td>
                        <td className="px-6 py-4 text-sm">
                            <span className="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">
                                Regular
                            </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">Dr. García</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                            Requiere seguimiento
                        </td>
                    </tr>

                    <tr className="hover:bg-gray-50 transition-colors duration-200">
                        <td className="px-6 py-4 text-sm text-gray-900">7</td>
                        <td className="px-6 py-4 text-sm text-gray-900">2023-02-01</td>
                        <td className="px-6 py-4 text-sm text-gray-900">3 mL</td>
                        <td className="px-6 py-4 text-sm text-gray-900">Establo C</td>
                        <td className="px-6 py-4 text-sm">
                            <span className="px-2 py-1 text-xs rounded-full bg-emerald-100 text-emerald-800">
                                Excelente
                            </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">Dr. López</td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                            Animal en excelente estado
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}