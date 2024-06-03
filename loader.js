// Wait for the page to load before executing the code
window.addEventListener('load', () => {
    // Hide the body of the page at first
    document.getElementsByClassName('wrapper')[0].style.display = 'none';

    var txt = ["dynamic memory init success,heap size = 26 Kbyte ",
    "C906 start...",
    "mtimer clk:1000000",
    "linux load start... ",
    "len:0x003942fc",
    "vm linux load done!",
    "dtb load done!",
    "opensbi load done!",
    "",
    "load time: 462996 us ",
    "",
    "OpenSBI v0.6",
    "   ____                    _____ ____ _____",
    "  / __ \                  / ____|  _ \_   _|",
    " | |  | |_ __   ___ _ __ | (___ | |_) || |",
    " | |  | | '_ \ / _ \ '_ \ \___ \|  _ < | |",
    " | |__| | |_) |  __/ | | |____) | |_) || |_",
    "  \____/| .__/ \___|_| |_|_____/|____/_____|",
    "        | |",
    "        |_|",
    "",
    "Platform Name          : T-HEAD Xuantie c910",
    "Platform HART Features : RV64ACDFIMSUVX",
    "Platform Max HARTs     : 1",
    "Current Hart           : 0",
    "Firmware Base          : 0x3eff0000",
    "Firmware Size          : 56 KB",
    "Runtime SBI Version    : 0.2",
    "",
    "MIDELEG : 0x0000000000000222",
    "MEDELEG : 0x000000000000b1ff",
    "[    0.000000] Linux version 5.10.4 (stolk@workpc) (riscv64-unknown-linux-gnu-gcc (Xuantie-900 linux-5.10.4 glibc gcc Toolchain V2.6.1 B-20220906) 10.2.0, GNU ld (GNU Binutils) 2.35) #3 SMP Sat Dec 17 11:33:24 PST 2022",
    "[    0.000000] earlycon: sbi0 at I/O port 0x0 (options '')",
    "[    0.000000] printk: bootconsole [sbi0] enabled",
    "[    0.000000] Zone ranges:",
    "[    0.000000]   DMA32    [mem 0x0000000050000000-0x0000000053ffffff]",
    "[    0.000000]   Normal   empty",
    "[    0.000000] Movable zone start for each node",
    "[    0.000000] Early memory node ranges",
    "[    0.000000]   node   0: [mem 0x0000000050000000-0x0000000053ffffff]",
    "[    0.000000] Initmem setup node 0 [mem 0x0000000050000000-0x0000000053ffffff]",
    "[    0.000000] On node 0 totalpages: 16384",
    "[    0.000000]   DMA32 zone: 224 pages used for memmap",
    "[    0.000000]   DMA32 zone: 0 pages reserved",
    "[    0.000000]   DMA32 zone: 16384 pages, LIFO batch:3",
    "[    0.000000] software IO TLB: Cannot allocate buffer",
    "[    0.000000] SBI specification v0.2 detected",
    "[    0.000000] SBI implementation ID=0x1 Version=0x6",
    "[    0.000000] SBI v0.2 TIME extension detected",
    "[    0.000000] SBI v0.2 IPI extension detected",
    "[    0.000000] SBI v0.2 RFENCE extension detected",
    "[    0.000000] riscv: ISA extensions acdfimsuv",
    "[    0.000000] riscv: ELF capabilities acdfimv",
    "[    0.000000] percpu: Embedded 17 pages/cpu s32600 r8192 d28840 u69632",
    "[    0.000000] pcpu-alloc: s32600 r8192 d28840 u69632 alloc=17*4096",
    "[    0.000000] pcpu-alloc: [0] 0 ",
    "[    0.000000] Built 1 zonelists, mobility grouping off.  Total pages: 16160",
    "[    0.000000] Kernel command line: console=ttyS0,2000000 loglevel=8 earlyprintk earlycon=sbi root=/dev/mtdblock0 ro rootfstype=squashfs",
    "[    0.000000] Dentry cache hash table entries: 8192 (order: 4, 65536 bytes, linear)",
    "[    0.000000] Inode-cache hash table entries: 4096 (order: 3, 32768 bytes, linear)",
    "[    0.000000] Sorting __ex_table...",
    "[    0.000000] mem auto-init: stack:off, heap alloc:off, heap free:off",
    "[    0.000000] Memory: 51148K/65536K available (4088K kernel code, 4773K rwdata, 2048K rodata, 159K init, 288K bss, 14388K reserved, 0K cma-reserved)",
    "[    0.000000] SLUB: HWalign=64, Order=0-3, MinObjects=0, CPUs=1, Nodes=1",
    "[    0.000000] rcu: Hierarchical RCU implementation.",
    "[    0.000000] rcu:     RCU restricting CPUs from NR_CPUS=8 to nr_cpu_ids=1.",
    "[    0000000]   Tracing variant of Tasks RCU enabled.",
    "[    0.000000] rcu: RCU calculated value of scheduler-enlistment delay is 25 jiffies.",
    "[    0.000000] rcu: Adjusting geometry for rcu_fanout_leaf=16, nr_cpu_ids=1",
    "[    0.000000] NR_IRQS: 64, nr_irqs: 64, preallocated irqs: 0",
    "[    0.000000] riscv-intc: 64 local interrupts mapped",
    "[    0.000000] plic: interrupt-controller@e0000000: mapped 64 interrupts with 1 handlers for 2 contexts.",
    "[    0.000000] random: get_random_bytes called from start_kernel+0x298/0x3a6 with crng_init=0",
    "[    0.000000] riscv_timer_init_dt: Registering clocksource cpuid [0] hartid [0]",
    "[    0.000000] clocksource: riscv_clocksource: mask: 0xffffffffffffffff max_cycles: 0x1d854df40, max_idle_ns: 3526361616960 ns",
    "[    018] sched_clock: 64 bits at 1000kHz, resolution 1000ns, wraps every 2199023255500ns",
    "[    0.000815] Console: colour dummy device 80x25",
    "[    0.001069] Calibrating delay loop (skipped), value calculated using timer frequency.. 2.00 BogoMIPS (lpj=4000)",
    "[    0.001555] pid_max: default: 32768 minimum: 301",
    "[    0.002155] Mount-cache hash table entries: 512 (order: 0, 4096 bytes, linear)",
    "[    0.002480] Mountpoint-cache hash table entries: 512 (order: 0, 4096 bytes, linear)",
    "[    0.007159] ASID allocator initialised with 65536 entries",
    "[    0.007754] rcu: Hierarchical SRCU implementation.",
    "[    0.009074] smp: Bringing up secondary CPUs ...",
    "[    0.009235] smp: Brought up 1 node, 1 CPU",
    "[    0.010311] devtmpfs: initialized",
    "[    0.013368] clocksource: jiffies: mask: 0xffffffff max_cycles: 0xffffffff, max_idle_ns: 7645041785100000 ns",
    "[    0.013840] futex hash table entries: 256 (order: 2, 16384 bytes, linear)",
    "[    0.016124] NET: Registered protocol family 16",
    "[    0.017384] DMA: preallocated 128 KiB GFP_KERNEL pool for atomic allocations",
    "[    0.018231] DMA: preallocated 128 KiB GFP_KERNEL|GFP_DMA32 pool for atomic allocations",
    "[    0.019450] i2c-core: driver [dummy] registered",
    "[    0.041945] SCSI subsystem initialized",
    "[    0.044460] clocksource: Switched to clocksource riscv_clocksource",
    "[    0.068742] NET: Registered protocol family 2",
    "[    0.070589] tcp_listen_portaddr_hash hash table entries: 256 (order: 0, 4096 bytes, linear)",
    "[    0.071008] TCP established hash table entries: 512 (order: 0, 4096 bytes, linear)",
    "[    0.071446] TCP bind hash table entries: 512 (order: 1, 8192 bytes, linear)",
    "[    0.071842] TCP: Hash tables configured (established 512 bind 512)",
    "[    0.072639] UDP hash table entries: 256 (order: 1, 8192 bytes, linear)",
    "[    0.072967] UDP-Lite hash table entries: 256 (order: 1, 8192 bytes, linear)",
    "[    0.073736] NET: Registered protocol family 1",
    "[    0.076015] workingset: timestamp_bits=62 max_order=14 bucket_order=0",
    "[    0.093922] squashfs: version 4.0 (2009/01/31) Phillip Lougher",
    "[    0.095730] NET: Registered protocol family 38",
    "[    0.095986] Block layer SCSI generic (bsg) driver version 0.4 loaded (major 252)",
    "[    0.096409] io scheduler mq-deadline registered",
    "[    0.096566] io scheduler kyber registered",
    "[    0.102243] 30002000.serial: ttyS0 at MMIO 0x30002000 (irq = 1, base_baud = 2000000) is a BFLB UART",
    "[    0.102708] printk: console [ttyS0] enabled",
    "[    0.102708] printk: console [ttyS0] enabled",
    "[    0.103159] printk: bootconsole [sbi0] disabled",
    "[    0.103159] printk: bootconsole [sbi0] disabled",
    "[    0.134636] brd: module loaded",
    "[    0.160927] loop: module loaded",
    "[    0.162418] physmap-flash 58500000.xp_flash: physmap platform flash device: [mem 0x58500000-0x588fffff]",
    "[    0.163868] 1 fixed-partitions partitions found on MTD device xip-flash.0",
    '[    0.16439] Creating 1 MTD partitions on "xip-flash.0":',
    '[    0.164739] 0x000000000000-0x000000280000 : "rootfs"',
    "[    0.169698] mousedev: PS/2 mouse device common for all mice",
    "[    0.170515] i2c /dev entries driver",
    "[    0.171092] i2c-core: driver [i2c-slave-eeprom] registered",
    "[    0.173143] [perf] T-HEAD C900 PMU probed",
    "[    0.175911] NET: Registered protocol family 10",
    "[    0.178385] Segment Routing with IPv6",
    "[    0.178810] sit: IPv6, IPv4 and MPLS over IPv4 tunneling driver",
    "[    0.180884] NET: Registered protocol family 17",
    "[    0.181247] Key type dns_resolver registered",
    "[    0.181799] debug_vm_pgtable: [debug_vm_pgtable         ]: Validating architecture page table helpers",
    "[    0.194601] VFS: Mounted root (squashfs filesystem) readonly on device 31:0.",
    "[    0.202050] devtmpfs: mounted",
    "[    0.202956] Freeing unused kernel memory: 156K",
    "[    0.228963] Run /sbin/init as init process",
    "[    0.229234]   with arguments:",
    "[    0.229425]     /sbin/init",
    "[    0.229601]     earlyprintk",
    "[    0.229781]   with environment:",
    "[    0.229981]     HOME=/",
    "[    0.230136]     TERM=linux",
    "********************************",
    " Exec rcS ",
    "********************************",
    "********mount all********",
    "mount: according to /proc/mounts, porc is already mounted on /proc",
    "mount: according to /proc/mounts, devtmpfs is already mounted on /dev",
    "mount: mounting devpts on /dev/pts failed: No such file or directory",
    "This may take some time ...",
    "mount: mounting sysfs on /sys failed: Device or resource busy",
    "--------Start Local Services--------",
    "********************************",
    "*******************************"]
    var range = 100;

    var j = 0;
    var i = 0;
    function typeWriter() {
        var speed = 1; /* The speed/duration of the effect in milliseconds */
        if (Math.floor(Math.random() * 100 > j) ) {
            speed = Math.floor(Math.random() * 200) + 10;
            range = 100;
        } else {
            speed = 0;
            range = 100;
        }

        if (i < txt[j].length) {
            for(let k = i; k < range + i; k++) {
                if(k < txt[j].length) {
                    document.getElementById("loader-text").innerHTML += txt[j][k];
                } else {
                    break;
                }
            }
            i += range;
            setTimeout(typeWriter, speed);
        }
        else 
        {
            document.getElementById("loader-text").innerHTML += "<br />";
            j++;
            i = 0;
            if(j < txt.length) {
                setTimeout(typeWriter, speed);
            } else {
                // enable scrollbar
                document.body.style.overflow = 'auto';
            }
        }
        // scroll to end of page
        window.scrollBy(0,100);
    }

    // Create a terminal-like booting animation
    function bootAnimation() {
        // disable scrollbar
        document.body.style.overflow = 'hidden';
        typeWriter();
    }

    // Call the boot animation function
    bootAnimation();

    // setTimeout(() => {
        // Remove the loader after boot animation
    //     document.getElementById('loader').remove();
        // Show the body of the page after boot animation
    //     document.getElementsByClassName('wrapper')[0].style.display = 'block';
    // } , 3000);
});
