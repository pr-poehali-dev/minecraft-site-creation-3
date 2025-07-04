import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-sm flex items-center justify-center">
                <span className="text-white font-bold text-sm">⛏️</span>
              </div>
              <h1 className="text-2xl font-bold text-white tracking-wide">
                MINECRAFT
              </h1>
            </div>
            <div className="hidden md:flex space-x-6">
              <a
                href="#"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Главная
              </a>
              <a
                href="#servers"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Сервера
              </a>
              <a
                href="#news"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Новости
              </a>
              <a
                href="#mods"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Моды
              </a>
              <a
                href="#forum"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Форум
              </a>
              <a
                href="#rules"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Правила
              </a>
              <a
                href="#donate"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Донат
              </a>
            </div>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6">
              Войти
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img
                src="/img/a6256386-d14a-4391-9365-a494542d6fad.jpg"
                alt="Minecraft Adventure"
                className="w-32 h-32 mx-auto mb-6 rounded-lg shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              ДОБРО ПОЖАЛОВАТЬ
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                В МИР ПРИКЛЮЧЕНИЙ
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Присоединяйся к нашему сообществу! Выживание, PvP, строительство -
              выбирай свой путь в мире блоков
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg"
              >
                <Icon name="Play" className="mr-2" size={20} />
                Начать игру
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg"
              >
                <Icon name="Users" className="mr-2" size={20} />
                Сообщество
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Servers Section */}
      <section id="servers" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Наши <span className="text-green-400">Сервера</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Survival Server */}
            <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center">
                    <Icon
                      name="TreePine"
                      className="mr-2 text-green-400"
                      size={24}
                    />
                    Выживание
                  </CardTitle>
                  <Badge className="bg-green-600 text-white">Онлайн</Badge>
                </div>
                <CardDescription className="text-slate-300">
                  Классическое выживание с экономикой
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Игроков:</span>
                    <span className="text-white">127/500</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Версия:</span>
                    <span className="text-white">1.20.1</span>
                  </div>
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    <Icon name="LogIn" className="mr-2" size={16} />
                    Подключиться
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Griefing Server */}
            <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center">
                    <Icon
                      name="Swords"
                      className="mr-2 text-red-400"
                      size={24}
                    />
                    Гриферское
                  </CardTitle>
                  <Badge className="bg-red-600 text-white">Hardcore</Badge>
                </div>
                <CardDescription className="text-slate-300">
                  Анархия и хаос без правил
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Игроков:</span>
                    <span className="text-white">89/300</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Версия:</span>
                    <span className="text-white">1.20.1</span>
                  </div>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    <Icon name="Skull" className="mr-2" size={16} />
                    Войти в бой
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* SkyBlock Server */}
            <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white flex items-center">
                    <Icon
                      name="Cloud"
                      className="mr-2 text-blue-400"
                      size={24}
                    />
                    SkyBlock
                  </CardTitle>
                  <Badge className="bg-blue-600 text-white">Творчество</Badge>
                </div>
                <CardDescription className="text-slate-300">
                  Строй свой остров в небе
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Игроков:</span>
                    <span className="text-white">234/800</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Версия:</span>
                    <span className="text-white">1.20.1</span>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Icon name="Rocket" className="mr-2" size={16} />
                    Взлететь
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 px-4 bg-slate-800/50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-12">
            Последние <span className="text-orange-400">Новости</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Обновление 1.20.1</CardTitle>
                <CardDescription className="text-slate-400">
                  2 дня назад
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Добавлены новые блоки и исправлены критические ошибки сервера
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Турнир PvP</CardTitle>
                <CardDescription className="text-slate-400">
                  5 дней назад
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Приз 10000 монет за первое место! Регистрация открыта
                </p>
              </CardContent>
            </Card>
            <Card className="bg-slate-900 border-slate-700">
              <CardHeader>
                <CardTitle className="text-white">Новые постройки</CardTitle>
                <CardDescription className="text-slate-400">
                  1 неделю назад
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300">
                  Игроки построили невероятный замок в центре мира
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Download"
                  className="mx-auto mb-4 text-green-400"
                  size={32}
                />
                <h3 className="text-white font-bold mb-2">Моды</h3>
                <p className="text-slate-400 text-sm">Скачать моды</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon
                  name="MessageCircle"
                  className="mx-auto mb-4 text-blue-400"
                  size={32}
                />
                <h3 className="text-white font-bold mb-2">Форум</h3>
                <p className="text-slate-400 text-sm">Обсуждения</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon
                  name="FileText"
                  className="mx-auto mb-4 text-yellow-400"
                  size={32}
                />
                <h3 className="text-white font-bold mb-2">Правила</h3>
                <p className="text-slate-400 text-sm">Читать правила</p>
              </CardContent>
            </Card>
            <Card className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors cursor-pointer">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Heart"
                  className="mx-auto mb-4 text-red-400"
                  size={32}
                />
                <h3 className="text-white font-bold mb-2">Донат</h3>
                <p className="text-slate-400 text-sm">Поддержать проект</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-br from-green-500 to-green-600 rounded-sm flex items-center justify-center">
              <span className="text-white font-bold text-xs">⛏️</span>
            </div>
            <h3 className="text-xl font-bold text-white">MINECRAFT SERVER</h3>
          </div>
          <p className="text-slate-400 mb-4">
            © 2024 Minecraft Server. Все права защищены.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Icon name="Users" size={20} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Icon name="MessageCircle" size={20} />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white transition-colors"
            >
              <Icon name="Mail" size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
