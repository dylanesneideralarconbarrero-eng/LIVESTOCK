import NaBar from "@/components/NaBar";

export default function Nosotros() {
  const usuarios = [
    {
      nombre: "James Washington",
      rol: "Content Marketing",
      img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
    },
    {
      nombre: "Richard Nelson",
      rol: "Content Writer",
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
    },
    {
      nombre: "Donald Jackman",
      rol: "Content Creator",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
    }
  ];

  return (
    <>
      <NaBar />

      <div className="flex flex-wrap items-center justify-center gap-6 p-6">
        {usuarios.map((user, index) => (
          <div
            key={index}
            className="text-sm text-gray-500 w-60 divide-y divide-gray-500/30 border border-gray-500/30 rounded bg-white shadow"
          >
            <div className="flex flex-col items-center py-8">
              <img
                className="h-24 w-24 rounded-full object-cover"
                src={user.img}
                alt={user.nombre}
              />
              <h2 className="text-lg text-gray-800 mt-3">
                {user.nombre}
              </h2>
              <p>{user.rol}</p>

              <p className="bg-green-500/20 px-2 py-0.5 rounded-full mt-2 text-xs text-green-600 border border-green-500/30">
                Admin
              </p>
            </div>

            <div className="flex divide-x divide-gray-500/30">
              <button className="flex items-center justify-center gap-2 w-1/2 py-3 hover:bg-gray-100 transition">
                
                {/* ICONO EMAIL */}
                <svg
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                >
                  <path
                    d="M16.5 2.5c0-.825-.675-1.5-1.5-1.5H3c-.825 0-1.5.675-1.5 1.5m15 0v9c0 .825-.675 1.5-1.5 1.5H3c-.825 0-1.5-.675-1.5-1.5v-9m15 0L9 7.75 1.5 2.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Email
              </button>

              <button className="flex items-center justify-center gap-2 w-1/2 py-3 hover:bg-gray-100 transition">
                
                {/* ICONO TELÉFONO */}
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M11.29 3.75a3.75 3.75 0 0 1 2.962 2.963M11.289.75a6.75 6.75 0 0 1 5.963 5.955m-.75 5.985v2.25a1.5 1.5 0 0 1-1.635 1.5 14.84 14.84 0 0 1-6.472-2.303 14.6 14.6 0 0 1-4.5-4.5 14.84 14.84 0 0 1-2.303-6.502A1.5 1.5 0 0 1 3.085 1.5h2.25a1.5 1.5 0 0 1 1.5 1.29 9.6 9.6 0 0 0 .525 2.108 1.5 1.5 0 0 1-.338 1.582l-.952.952a12 12 0 0 0 4.5 4.5l.952-.952a1.5 1.5 0 0 1 1.582-.338c.681.254 1.388.43 2.108.526a1.5 1.5 0 0 1 1.29 1.522"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Call
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


