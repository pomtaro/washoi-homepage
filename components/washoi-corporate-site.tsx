'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, FileSpreadsheet, Zap, Puzzle, Target, PenTool, Lightbulb, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef } from "react"

export function WashoiCorporateSite() {
  const servicesRef = useRef<HTMLElement>(null)
  const caseStudiesRef = useRef<HTMLElement>(null)
  const hojokuruRef = useRef<HTMLElement>(null)
  const teamRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)

  const scrollToSection = (elementRef: React.RefObject<HTMLElement>, offset: number = 0) => {
    const element = elementRef.current
    if (element) {
      const top = element.getBoundingClientRect().top + window.pageYOffset + offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      e.preventDefault()
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute('href')
      switch (href) {
        case '#services':
          scrollToSection(servicesRef, -200)
          break
        case '#case-studies':
          scrollToSection(caseStudiesRef, -200)
          break
        case '#hojokuru':
          scrollToSection(hojokuruRef, -200)
          break
        case '#team':
          scrollToSection(teamRef, -200)
          break
        case '#about':
          scrollToSection(aboutRef, -200)
          break
      }
    }

    const links = document.querySelectorAll('nav a[href^="#"]')
    links.forEach(link => {
      link.addEventListener('click', handleClick as EventListener)
    })

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleClick as EventListener)
      })
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white max-w-7xl mx-auto w-full">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Washoi%E3%83%AD%E3%82%B3%E3%82%99-5sNabaPTGiow0FaLigztopzsILx7F1.png"
            alt="Washoi Logo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <span className="ml-2 text-2xl font-bold">Washoi</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#services">
            事業内容
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#case-studies">
            開発事例
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#hojokuru">
            ホジョクル
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#team">
            メンバー
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#about">
            会社情報
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 relative overflow-hidden">
          <div className="container px-4 md:px-6 relative z-10 max-w-7xl mx-auto">
            <div className="flex flex-col items-start space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none max-w-3xl">
                <span className="block mb-2">感動アナログ、</span>
                <span className="block">革新デジタル。</span>
              </h1>
              <p className="text-gray-500 md:text-xl max-w-[700px]">
                Analog Emotion, Digital Innovation.
              </p>
            </div>
            <div className="mt-16">
              <p className="text-gray-600 md:text-lg max-w-[700px]">
                中小企業の魅力は、顧客に寄り添う温かさ、丁寧な職人技、地域に根ざした活動など、人の心に響くアナログ体験です。<br />
                しかし、多くの企業は、本来注力すべき業務以外に多くの時間を取られ、人材不足にも悩んでいます。<br />
                Washoiは、デジタル技術を通して、時間とリソースを有効活用できる体制を構築し、中小企業がアナログ体験に集中できる環境を創り出します。<br />
                本質に集中し、感動を創造する。
              </p>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-20" />
            <div className="absolute right-0 bottom-0 w-3/4 h-3/4">
              <div className="w-full h-full bg-blue-200 transform rotate-6 translate-x-1/4 translate-y-1/4" />
              <div className="absolute inset-0 bg-white/50" />
            </div>
          </div>
        </section>
        <section id="services" ref={servicesRef} className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">事業内容</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="w-6 h-6 mr-2" />
                    システム開発
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      業務最適化
                    </h3>
                    <p>お客様の業務フローを徹底的に理解し、最適化された独自のシステムを構築します。煩雑な作業から解放され、本来の業務に集中できるようになります。</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold flex items-center">
                      <Puzzle className="w-5 h-5 mr-2" />
                      使いやすさ重視
                    </h3>
                    <p>ITに詳しくない方でも安心してご利用いただけるよう、直感的で使いやすいインターフェースを設計します。</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold flex items-center">
                      <Target className="w-5 h-5 mr-2" />
                      成長に合わせた柔軟性
                    </h3>
                    <p>お客様の成長に合わせて柔軟にカスタマイズ可能なシステムを提供し、長期的なビジネスの発展をサポートします。</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileSpreadsheet className="w-6 h-6 mr-2" />
                    ホジョクル
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold flex items-center">
                      <Zap className="w-5 h-5 mr-2" />
                      AIマッチング
                    </h3>
                    <p>最新のAI技術を活用し、お客様の事業に最適な補助金情報を自動で収集・マッチングします。見逃しがちな機会を逃さず、事業成長の可能性を最大化します。</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold flex items-center">
                      <PenTool className="w-5 h-5 mr-2" />
                      申請サポート
                    </h3>
                    <p>複雑な補助金申請プロセスをシンプルに。申請書類の作成から提出まで、専門家がきめ細かくサポートします。</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold flex items-center">
                      <Lightbulb className="w-5 h-5 mr-2" />
                      活用プランニング
                    </h3>
                    <p>補助金獲得後の活用プランニングまでサポート。資金を最大限に活かし、ビジネスの飛躍的な成長を実現します。</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="case-studies" ref={caseStudiesRef} className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">システム開発事例</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>木材卸売向け帳票作成システム</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">木材卸売業向けに、見積書、納品書、請求書の作成プロセスを自動化するシステムを開発。</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>見積書の自動生成</li>
                    <li>納品書と請求書の連動作成</li>
                    <li>過去の取引データの活用</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>設計会社向け物件管理システム</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">設計会社向けに、設計業務の進捗を管理し、情報を一元管理するシステムを構築。</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>プロジェクト進捗管理</li>
                    <li>図面・資料の中央管理</li>
                    <li>クライアントとの情報共有</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>勤怠管理システム</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-2">従業員がスマホで出退勤の操作、管理者はデータを確認するだけで自動で請求書が作成されるシステムを開発。</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>スマホアプリでの出退勤記録</li>
                    <li>リアルタイムの勤怠状況確認</li>
                    <li>自動請求書生成機能</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="hojokuru" ref={hojokuruRef} className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">ホジョクル</h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    <CheckCircle className="w-6 h-6 inline-block mr-2" />
                    サービス内容
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>企業情報に基づいた最適な補助金のAIマッチング</li>
                    <li>補助金を活用した時の未来についてご提案</li>
                    <li>申請後のフォローアップと活用アドバイス</li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>
                    <CheckCircle className="w-6 h-6 inline-block mr-2" />
                    サービスの特徴
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>申請開始前に情報を提供し、事前に準備ができる</li>
                    <li>自分で探す必要も、調べる必要も、理解する必要もない</li>
                    <li>申請から補助金獲得までのサポート</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="team" ref={teamRef} className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">メンバー</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="p-8">
                <CardContent className="flex flex-col items-center p-0">
                  <Image
                    src="/images/P1010506.JPG"
                    alt="柴田修"
                    width={300}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold">柴田修</h3>
                  <p className="text-sm text-gray-500 mb-2">Shibata Osamu</p>
                  <p className="text-sm text-gray-500 mb-2">CEO</p>
                  <p className="text-sm text-gray-500 mb-2">税理士</p>
                  <p className="text-sm">
                    2003年に柴田修税理士事務所を開業。中小企業向けの税務・会計業務を中心に、様々な業務プロセスの改善や効率化に取り組んできた。長年の経験を通じて、会計業務の効率化を提案し、企業の業務改善を支援している。
                  </p>
                </CardContent>
              </Card>
              <Card className="p-8">
                <CardContent className="flex flex-col items-center p-0">
                  <Image
                    src="/images/P1010431.JPG"
                    alt="東孝紀"
                    width={300}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold">東孝紀</h3>
                  <p className="text-sm text-gray-500 mb-2">Higashi Takanori</p>
                  <p className="text-sm text-gray-500 mb-2">CTO</p>
                  <p className="text-sm text-gray-500 mb-2">ITコーディネータ</p>
                  <p className="text-sm">
                    2017年に京都大学大学院を修了。同年ソニー株式会社に入社し、5G通信用半導体デバイスの研究に従事。半導体の加工形状に関する特許を取得し、研究計画の効率化や分析自動化に取り組んだ。2018年にライフシフト株式会社に入社し、アパレルEC事業のプロジェクトリーダーとして、SNSマーケティング、業務自動化、配送物流の構築、分析ツールの開発、広告運用に携わる。2022年に株式会社Washoiに入社し、顧客の業務効率化を目的とした業務アプリケーションの開発に従事。理論だけでなく実体験に基づくアプローチで、他社の業務効率化に貢献している。2024年ITコーディネータ資格を取得。
                  </p>
                </CardContent>
              </Card>
              <Card className="p-8">
                <CardContent className="flex flex-col items-center p-0">
                  <Image
                    src="/images/P1010288.JPG"
                    alt="日紫喜賢太"
                    width={300}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold">日紫喜賢太</h3>
                  <p className="text-sm text-gray-500 mb-2">Hishiki Kenta</p>
                  <p className="text-sm text-gray-500 mb-2">COO</p>
                  <p className="text-sm text-gray-500 mb-2">ITコーディネータ</p>
                  <p className="text-sm">
                    2017年に東京大学大学院を修了。同年、JFEスチール株式会社に入社し、圧延工場において能率向上に取り組み、年間数千万円規模のコスト削減を実現。また、自動車向けの難圧延材における圧延トラブル削減に貢献。2021年にMeguru AI株式会社を創業し、不動産業者向けのAIシステム開発に従事。中小企業向けの営業DXにも携わり、提携企業の売上を5倍に拡大させた。2024年には株式会社Washoiに入社し、現場ヒアリングを通じたコンサルティングや業務アプリケーション開発に従事している。2024年ITコーディネータ資格を取得。
                  </p>
                </CardContent>
              </Card>
              <Card className="p-8">
                <CardContent className="flex flex-col items-center p-0">
                  <Image
                    src="/images/P1010251.JPG"
                    alt="新居邦亮"
                    width={300}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-bold">新居邦亮</h3>
                  <p className="text-sm text-gray-500 mb-2">Nii Kuniaki</p>
                  <p className="text-sm text-gray-500 mb-2">DXエンジニア</p>
                  <p className="text-sm text-gray-500 mb-2">ITコーディネータ</p>
                  <p className="text-sm">
                    2017年に京都大学大学院を修了。同年、三菱電機株式会社に入社し、鉄道用変電所建設プロジェクトのマネジメントおよび電気設計に従事。プロジェクトの計画策定から運営、電気設備の仕様調整、顧客への提案活動を担当し、品質・コスト・納期の最適化を図り、顧客満足度の向上に貢献。また、業務上の課題や顧客のニーズを的確に把握し、改善に繋げるノウハウを習得。2024年には株式会社Washoiに入社し、生成AIを活用したサービス開発に携わっている。2024年ITコーディネータ資格を取得。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="about" ref={aboutRef} className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">会社情報</h2>
            <div className="space-y-4">
              <p className="text-lg">株式会社Washoi</p>
              <p>東京都渋谷区神宮前2-33-8</p>
              <p>電話番号: 03-6453-6902</p>
              <p>メールアドレス: info@washoi.co.jp</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t max-w-7xl mx-auto">
        <p className="text-xs text-gray-500">© 2023 株式会社Washoi. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#services">
            事業内容
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#case-studies">
            開発事例
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#hojokuru">
            ホジョクル
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#team">
            メンバー
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#about">
            会社情報
          </Link>
        </nav>
      </footer>
    </div>
  )
}