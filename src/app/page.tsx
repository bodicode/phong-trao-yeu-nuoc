"use client";

import { motion, Variants } from "framer-motion";
import { useMemo, useState } from "react";
import type { LucideIcon } from "lucide-react";
import {
  ChevronDown,
  Flame,
  Users,
  MapPin,
  Calendar,
  Zap,
  Filter,
  X,
} from "lucide-react";

// ===== Types =====
type Movement = {
  year: string;
  title: string;
  leader: string;
  description: string;
  result: string;
  icon: string;
  color: string; // tailwind gradient from-xx to-yy
  location: string;
  duration: string;
  scale: string;
  approach: string;
  tags: string[];
  impact: string;
  background?: string;
  organization?: string;
  legacy?: string;
  events?: { date: string; detail: string }[];
  image?: string;
  references?: string[];
};

type Stat = { label: string; value: string; icon: LucideIcon };

export default function HomePage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // ===== Dataset: bọc trong useMemo để ổn định reference =====
  const movements: Movement[] = useMemo<Movement[]>(
    () => [
      {
        year: "1885 - 1896",
        title: "Phong trào Cần Vương",
        leader: "Vua Hàm Nghi, Tôn Thất Thuyết và các văn thân, sĩ phu",
        description:
          "Đỉnh cao của phong trào yêu nước chống Pháp cuối thế kỷ XIX theo khuynh hướng phong kiến; bùng nổ sau sự kiện kinh thành Huế thất thủ và chiếu Cần Vương (1885).",
        result:
          "Thất bại do chênh lệch lực lượng, thiếu liên kết toàn quốc và đường lối phong kiến không còn phù hợp.",
        icon: "⚔️",
        color: "from-red-500 to-orange-500",
        location: "Chủ yếu Trung Kỳ và Bắc Kỳ",
        duration: "11 năm",
        scale: "Rộng lớn",
        approach: "Đấu tranh vũ trang",
        tags: ["Quân sự", "Phong kiến", "Kháng chiến"],
        impact:
          "Khẳng định tinh thần bất khuất, tạo nền cho các khởi nghĩa địa phương và chuyển hướng tư tưởng cứu nước.",
        background:
          "Sau các hiệp ước 1883–1884, thực dân Pháp áp đặt quyền kiểm soát; sĩ phu kêu gọi phù vương diệt Pháp.",
        organization: "Văn thân, sĩ phu, nông dân",
        legacy:
          "Gieo mầm ý chí độc lập, nhưng bộc lộ hạn chế của con đường phong kiến, thúc đẩy tìm kiếm khuynh hướng mới.",
        events: [
          { date: "7/1885", detail: "Tôn Thất Thuyết phản công tại Huế" },
          { date: "8/1885", detail: "Vua Hàm Nghi hạ Chiếu Cần Vương" },
        ],
      },
      {
        year: "1885 - 1896",
        title: "Khởi nghĩa Hương Khê",
        leader: "Phan Đình Phùng, Cao Thắng",
        description:
          "Cuộc khởi nghĩa tiêu biểu nhất trong phong trào Cần Vương ở Trung Kỳ; nghĩa quân rèn súng theo mẫu Tây, đánh du kích hiệu quả.",
        result:
          "Thất bại sau khi Phan Đình Phùng hy sinh (1895) và lực lượng suy yếu.",
        icon: "🏔️",
        color: "from-rose-500 to-red-500",
        location: "Nghệ Tĩnh – Thanh – Quảng Bình",
        duration: "11 năm",
        scale: "Rộng",
        approach: "Du kích – phòng tuyến rừng núi",
        tags: ["Quân sự", "Cần Vương", "Du kích"],
        impact:
          "Nâng tầm tổ chức và kỹ thuật chế tạo vũ khí trong nước (Cao Thắng).",
        background: "Hạt nhân văn thân Nghệ Tĩnh tụ nghĩa theo Cần Vương.",
        organization: "Văn thân, nông dân miền núi",
        legacy:
          "Biểu tượng khí tiết sĩ phu; nguồn cảm hứng về tự cường quân sự.",
      },
      {
        year: "1886 - 1887",
        title: "Khởi nghĩa Ba Đình",
        leader: "Đinh Công Tráng, Phạm Bành",
        description:
          "Xây dựng căn cứ kiên cố tại Ba Đình (Thanh Hóa), dùng địa thế làng lũy chống Pháp nhiều tháng liền.",
        result: "Thất bại khi căn cứ bị bao vây; lãnh tụ hy sinh/ bị bắt.",
        icon: "🛡️",
        color: "from-amber-500 to-red-500",
        location: "Thanh Hóa",
        duration: "Hơn 1 năm",
        scale: "Lớn",
        approach: "Phòng ngự làng lũy – quyết chiến",
        tags: ["Quân sự", "Cần Vương"],
        impact:
          "Trở thành biểu tượng ý chí quyết tử; ảnh hưởng tới các căn cứ lũy khác.",
      },
      {
        year: "1883 - 1892",
        title: "Khởi nghĩa Bãi Sậy",
        leader: "Nguyễn Thiện Thuật",
        description:
          "Tổ chức lực lượng ở vùng lau sậy (Hưng Yên – Hải Dương), đánh du kích linh hoạt trong đồng bằng Bắc Bộ.",
        result: "Suy yếu và tan rã do bị bao vây, tiếp tế khó khăn.",
        icon: "🌾",
        color: "from-yellow-500 to-orange-500",
        location: "Hưng Yên – Hải Dương",
        duration: "Gần 10 năm",
        scale: "Trung bình",
        approach: "Du kích đồng bằng",
        tags: ["Quân sự", "Du kích"],
        impact: "Kinh nghiệm chiến tranh du kích ở địa hình đồng bằng.",
      },
      {
        year: "1884 - 1913",
        title: "Khởi nghĩa Yên Thế",
        leader: "Hoàng Hoa Thám (Đề Thám)",
        description:
          "Cuộc khởi nghĩa nông dân vũ trang lớn và kéo dài nhất chống Pháp; xây dựng căn cứ, kết hợp đánh du kích linh hoạt.",
        result: "Thất bại sau khi Đề Thám bị sát hại, căn cứ bị bao vây.",
        icon: "🔥",
        color: "from-orange-500 to-red-500",
        location: "Yên Thế, Bắc Giang",
        duration: "~29 năm",
        scale: "Lớn nhất",
        approach: "Chiến tranh du kích",
        tags: ["Khởi nghĩa", "Nông dân", "Kháng chiến lâu dài"],
        impact:
          "Khẳng định sức chiến đấu bền bỉ của nông dân; để lại nhiều bài học tổ chức căn cứ, liên kết địa bàn.",
        legacy:
          "Tên tuổi Đề Thám đi vào dân gian như biểu tượng anh hùng nông dân.",
      },
      {
        year: "1905 - 1909",
        title: "Phong trào Đông Du",
        leader: "Phan Bội Châu",
        description:
          "Đưa thanh niên sang Nhật học tập, tìm đường cứu nước theo khuynh hướng dân chủ tư sản; lập Duy Tân hội, liên hệ cách mạng châu Á.",
        result:
          "Thất bại khi Nhật – Pháp thỏa hiệp; du học sinh bị trục xuất, tổ chức bị giải tán.",
        icon: "✈️",
        color: "from-yellow-500 to-amber-500",
        location: "Việt Nam – Nhật Bản",
        duration: "4 năm",
        scale: "Ảnh hưởng rộng",
        approach: "Giáo dục – vận động quốc tế",
        tags: ["Giáo dục", "Tư sản dân chủ", "Quốc tế"],
        impact:
          "Gieo mầm tư tưởng dân chủ tư sản, khơi mở tư duy hiện đại về tổ chức và ngoại giao cách mạng.",
        organization: "Trí thức, thanh niên tân học",
        legacy: "Đặt nền cho mạng lưới sĩ phu – trí thức mới đầu thế kỷ XX.",
      },
      {
        year: "1907",
        title: "Đông Kinh Nghĩa Thục",
        leader: "Lương Văn Can, Nguyễn Quyền, Đào Nguyên Phổ",
        description:
          "Trường tân học tại Hà Nội, truyền bá tư tưởng canh tân, cải cách chữ quốc ngữ, khai dân trí – chấn dân khí – hậu dân sinh.",
        result: "Bị thực dân Pháp đóng cửa sau ~9 tháng hoạt động.",
        icon: "📚",
        color: "from-green-500 to-lime-500",
        location: "Hà Nội",
        duration: "9 tháng",
        scale: "Ảnh hưởng lớn",
        approach: "Giáo dục – dân trí",
        tags: ["Giáo dục", "Khai dân trí", "Canh tân"],
        impact:
          "Cải cách giáo dục và văn hóa, thúc đẩy lối sống văn minh; cổ vũ sử dụng chữ quốc ngữ trong phổ biến tri thức.",
        legacy: "Một cột mốc của văn hóa – giáo dục Việt Nam hiện đại.",
      },
      {
        year: "1906 - 1908",
        title: "Phong trào Duy Tân",
        leader: "Phan Châu Trinh, Huỳnh Thúc Kháng, Trần Quý Cáp",
        description:
          "Cuộc vận động cải cách kinh tế – xã hội – văn hóa ở Trung Kỳ; chủ trương bất bạo động, đề cao dân quyền, dân trí.",
        result: "Bị đàn áp dữ dội sau phong trào chống sưu thuế 1908.",
        icon: "🏛️",
        color: "from-cyan-500 to-blue-500",
        location: "Trung Kỳ",
        duration: "2 năm",
        scale: "Lan rộng",
        approach: "Cải cách ôn hòa",
        tags: ["Cải cách", "Ôn hòa", "Tự cường"],
        impact:
          "Thúc đẩy tinh thần tự lực, cổ vũ công thương nghiệp, giáo dục tân học, xây dựng xã hội văn minh.",
        organization: "Trí thức tân học, tiểu tư sản, thị dân",
        legacy: "Định hình khuynh hướng dân chủ, pháp trị và canh tân xã hội.",
      },
      {
        year: "1908",
        title: "Phong trào chống thuế Trung Kỳ",
        leader: "Sĩ phu và nhân dân Trung Kỳ",
        description:
          "Phong trào quần chúng phản đối sưu cao thuế nặng, đỉnh điểm ở Quảng Nam, Quảng Ngãi; gắn với tư tưởng Duy Tân.",
        result: "Bị đàn áp; nhiều sĩ phu bị bắt đày Côn Đảo.",
        icon: "🧾",
        color: "from-amber-500 to-yellow-500",
        location: "Trung Kỳ (miền Trung)",
        duration: "Vài tháng cao trào",
        scale: "Rộng",
        approach: "Biểu tình – kiến nghị",
        tags: ["Quần chúng", "Cải cách", "Thuế"],
        impact:
          "Chuyển hóa ý thức quần chúng; đặt vấn đề dân sinh – dân quyền.",
      },
      {
        year: "1912 - 1916",
        title: "Việt Nam Quang Phục Hội",
        leader: "Phan Bội Châu và đồng chí",
        description:
          "Tổ chức cách mạng theo khuynh hướng dân chủ tư sản, chủ trương bạo động giành độc lập, lập Cộng hòa Dân quốc Việt Nam.",
        result: "Bị đàn áp, lãnh tụ bị bắt; hoạt động tan rã.",
        icon: "🌏",
        color: "from-indigo-500 to-purple-500",
        location: "Trung Quốc – Việt Nam",
        duration: "4 năm cao trào",
        scale: "Hải ngoại & nội địa",
        approach: "Tổ chức cách mạng – bạo động",
        tags: ["Tư sản dân chủ", "Quốc tế", "Tổ chức"],
        impact:
          "Mở rộng quan hệ cách mạng quốc tế; thử nghiệm mô hình nhà nước hiện đại.",
      },
    ],
    []
  );

  // ===== Derived data =====
  const allTags = useMemo(() => {
    const s = new Set<string>();
    movements.forEach((m) => m.tags.forEach((t) => s.add(t)));
    return Array.from(s).sort();
  }, [movements]);

  const filteredMovements = useMemo(
    () =>
      selectedTag
        ? movements.filter((m) => m.tags.includes(selectedTag))
        : movements,
    [movements, selectedTag]
  );

  const dynamicStats: Stat[] = useMemo(() => {
    const years = movements
      .map((m) => m.year)
      .join("; ")
      .match(/\d{4}/g);
    let span = "1858 - 1930";
    if (years) {
      const nums = years.map(Number);
      const min = Math.min(...nums);
      const max = Math.max(...nums);
      span = `${min} - ${max}`;
    }
    return [
      { label: "Phong trào", value: movements.length.toString(), icon: Flame },
      { label: "Bao quát", value: span, icon: Calendar },
      { label: "Lãnh đạo", value: "Nhiều sĩ phu – trí thức", icon: Users },
      { label: "Phạm vi", value: "Toàn quốc & hải ngoại", icon: MapPin },
    ];
  }, [movements]);

  // ===== Motion variants =====
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 },
    },
  } as const;

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  // ===== UI =====
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 py-20 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <motion.span
            className="text-6xl md:text-7xl block mb-3 text-red-500"
            animate={{ scale: [1, 1.1, 1], rotate: [0, -4, 4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            🇻🇳
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-red-600 via-orange-500 to-amber-400 bg-clip-text text-transparent mb-3">
            Các Phong Trào Yêu Nước
          </h1>
          <p className="text-lg md:text-xl text-slate-600 mb-3 font-medium">
            Giai đoạn trước khi thành lập Đảng (1858 - 1930)
          </p>
          <p className="text-slate-500 max-w-3xl mx-auto">
            Khám phá những trang sử hào hùng, ghi dấu tinh thần bất khuất của
            dân tộc Việt Nam trong hành trình chống xâm lược và tìm con đường
            cứu nước.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center gap-3 justify-center">
          <span className="inline-flex items-center gap-2 text-sm text-slate-600">
            <Filter className="w-4 h-4" /> Lọc theo khuynh hướng:
          </span>
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1.5 rounded-full text-sm border ${
              selectedTag === null
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-slate-700 border-slate-200 hover:border-orange-300"
            }`}
          >
            Tất cả
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-full text-sm border transition ${
                selectedTag === tag
                  ? "bg-orange-500 text-white border-orange-500"
                  : "bg-white text-slate-700 border-slate-200 hover:border-orange-300"
              }`}
            >
              {tag}
            </button>
          ))}
          {selectedTag && (
            <button
              onClick={() => setSelectedTag(null)}
              className="ml-2 inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-sm bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200"
            >
              <X className="w-4 h-4" /> Bỏ lọc
            </button>
          )}
        </div>

        {/* Dynamic Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {dynamicStats.map((stat, i) => {
            const Icon: LucideIcon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white/80 backdrop-blur border border-slate-200 rounded-xl p-6 text-center shadow-sm hover:shadow-lg hover:border-orange-400 transition-all"
              >
                <Icon className="w-7 h-7 text-orange-500 mx-auto mb-2" />
                <p className="text-slate-500 text-sm mb-1">{stat.label}</p>
                <p className="text-xl md:text-2xl font-bold text-slate-800">
                  {stat.value}
                </p>
              </div>
            );
          })}
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {filteredMovements.length > 0 ? (
            filteredMovements.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() =>
                  setExpandedIndex(expandedIndex === index ? null : index)
                }
                className="group cursor-pointer"
              >
                <div className="relative">
                  {/* Timeline spine & node */}
                  <div className="absolute left-2.5 top-8 h-full w-0.5 bg-slate-200" />
                  <motion.div
                    className={`absolute left-0 top-8 w-5 h-5 bg-gradient-to-br ${item.color} rounded-full border-4 border-slate-50 shadow-md`}
                    whileHover={{ scale: 1.2 }}
                  />

                  {/* Card */}
                  <div className="ml-12 bg-white p-0.5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-transparent group-hover:border-orange-300">
                    <div className="bg-white rounded-xl p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition">
                            {item.title}
                          </h2>
                          <div className="flex flex-wrap gap-2 mb-3">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-2.5 py-1 bg-orange-100 text-orange-700 rounded-full font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <p className="text-sm font-semibold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> {item.year}
                          </p>
                        </div>
                        <span className="text-5xl">{item.icon}</span>
                      </div>

                      {/* Quick grid */}
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4 text-sm">
                        <div className="bg-slate-100 rounded-lg p-3">
                          <p className="text-xs text-slate-500">Địa điểm</p>
                          <p className="font-semibold text-slate-700">
                            {item.location}
                          </p>
                        </div>
                        <div className="bg-slate-100 rounded-lg p-3">
                          <p className="text-xs text-slate-500">Thời gian</p>
                          <p className="font-semibold text-slate-700">
                            {item.duration}
                          </p>
                        </div>
                        <div className="bg-slate-100 rounded-lg p-3">
                          <p className="text-xs text-slate-500">Quy mô</p>
                          <p className="font-semibold text-slate-700">
                            {item.scale}
                          </p>
                        </div>
                        <div className="bg-slate-100 rounded-lg p-3">
                          <p className="text-xs text-slate-500">Phương thức</p>
                          <p className="font-semibold text-slate-700">
                            {item.approach}
                          </p>
                        </div>
                      </div>

                      {/* Leader & background */}
                      <div className="mb-4 pb-4 border-b border-slate-200 space-y-2">
                        <p className="text-slate-700">
                          <span className="text-slate-900 font-semibold">
                            👤 Lãnh đạo:
                          </span>{" "}
                          {item.leader}
                        </p>
                        {item.organization && (
                          <p className="text-slate-700">
                            <span className="text-slate-900 font-semibold">
                              🤝 Lực lượng:
                            </span>{" "}
                            {item.organization}
                          </p>
                        )}
                        {item.background && (
                          <p className="text-slate-700">
                            <span className="text-slate-900 font-semibold">
                              📜 Bối cảnh:
                            </span>{" "}
                            {item.background}
                          </p>
                        )}
                      </div>

                      {/* Description */}
                      <p className="text-slate-700 mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Expandable details */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: expandedIndex === index ? 1 : 0,
                          height: expandedIndex === index ? "auto" : 0,
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 space-y-3">
                          {item.events && item.events.length > 0 && (
                            <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                              <p className="font-semibold text-slate-800 mb-2">
                                🗓️ Mốc sự kiện
                              </p>
                              <ul className="text-slate-700 list-disc pl-5 space-y-1">
                                {item.events.map((e, idx) => (
                                  <li key={idx}>
                                    <span className="font-medium">
                                      {e.date}:
                                    </span>{" "}
                                    {e.detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                            <p className="text-red-800">
                              <span className="font-semibold">📌 Kết quả:</span>{" "}
                              {item.result}
                            </p>
                          </div>
                          <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                            <p className="text-green-800">
                              <span className="font-semibold">
                                ✨ Tác động:
                              </span>{" "}
                              {item.impact}
                            </p>
                          </div>
                          {item.legacy && (
                            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                              <p className="text-amber-900">
                                <span className="font-semibold">
                                  🏛️ Di sản:
                                </span>{" "}
                                {item.legacy}
                              </p>
                            </div>
                          )}
                        </div>
                      </motion.div>

                      {/* Expand indicator */}
                      <div className="flex justify-center mt-4 pt-4 border-t border-slate-200/80">
                        <motion.div
                          animate={{
                            rotate: expandedIndex === index ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-orange-500" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg">
                Không có phong trào nào phù hợp với bộ lọc
              </p>
            </div>
          )}
        </motion.div>

        {/* Conclusion */}
        <section className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            Tổng kết bối cảnh lịch sử
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Từ năm 1858 đến trước 1930, phong trào yêu nước Việt Nam diễn ra
            liên tục với nhiều khuynh hướng: từ phù vương chống Pháp theo đường
            lối phong kiến, đến cải cách dân chủ tư sản và các nỗ lực quốc tế
            hóa. Dù thất bại, các phong trào đã hun đúc tinh thần độc lập, tích
            lũy kinh nghiệm tổ chức, quân sự và tư tưởng; qua đó chuẩn bị điều
            kiện về{" "}
            <span className="font-semibold">
              lực lượng, tổ chức và đường lối
            </span>{" "}
            cho sự ra đời của khuynh hướng cách mạng vô sản và{" "}
            <span className="font-semibold">Đảng Cộng sản Việt Nam (1930)</span>
            .
          </p>
        </section>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mt-12 text-slate-600 space-y-2"
        >
          <p className="text-sm flex items-center justify-center gap-2">
            <Zap className="w-4 h-4 text-yellow-500" /> Nhấp vào mỗi sự kiện để
            xem chi tiết đầy đủ
          </p>
          <p className="text-xs text-slate-500 max-w-2xl mx-auto">
            Trang này là tư liệu giáo dục, có thể mở rộng thêm ảnh, trích dẫn và
            liên kết tham khảo để phục vụ học tập – trưng bày số.
          </p>
        </motion.div>
      </div>
    </main>
  );
}
