class AppService {
    getTitle(): string {
        return "App";
    }

    getContent(): string {
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    }
}

const appService = new AppService();

export default appService;