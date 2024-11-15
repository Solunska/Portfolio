const FlutterSvg = () => {
    return (
        <svg className="flutter-svg" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className="primary-color" d="M3.36328 17.5547L20.8633 0H31.6367L8.77734 22.8594L3.36328 17.5547ZM20.8633 35H31.6367L22.3125 25.6758L31.6367 16.1602H20.8633L11.5391 25.5664L20.8633 35Z" fill="#656565" />
            <path className="secondary-color" d="M22.3125 25.6758L16.8437 20.207L11.5391 25.5664L16.8437 30.9258L22.3125 25.6758Z" fill="#656565" />
            <path className="tertiary-color" d="M31.6367 35L22.3125 25.6758L16.8438 30.9258L20.8633 35H31.6367Z" fill="#464646" />
            <path className="gradient-color" d="M16.8438 30.9258L25.2656 28.6289L22.3125 25.6758L16.8438 30.9258Z" fill="url(#paint0_linear_23_80)" />
            <defs>
                <linearGradient id="paint0_linear_23_80" x1="16.2326" y1="31.8172" x2="23.7412" y2="27.1794" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#464646" />
                    <stop offset="0.63" stopColor="#393939" />
                    <stop offset="1" stopColor="#282828" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export default FlutterSvg;